import {
  DESKTOP,
  MOBILE,
  TABLET,
  WEBVIEW_ANDROID,
  WEBVIEW_IPHONE,
  WEBVIEW_LN_ANDROID,
  WEBVIEW_LN_IPHONE,
  WEBVIEW_TABLET,
} from '../constants/devices';

export function deriveChannelId({
  clubSiteId,
  deviceType,
  host,
  isAppview,
  isResale,
  isThirdParty,
  search,
}) {
  const domain = deriveDomain(host, clubSiteId, search);
  const deviceName = deriveDeviceName({
    clubSiteId,
    deviceType,
    isAppview,
    isLiveNation: (/livenation/u).test(domain),
    isResale,
    isThirdParty,
  });
  const isMobile = deviceType === MOBILE;
  const isTablet = deviceType === TABLET;
  const isDesktop = deviceType === DESKTOP;

  if ((/ticketmaster(?:\.co\.uk|\.ie|\.com\.mx)/u).test(domain)) {
    // we are not considering 3PE and clubsiteId scenarion in UK
    if (isMobile || isAppview) {
      const isUK = (/ticketmaster\.co\.uk/u).test(domain);
      return `mobile.${isUK ? 'ticketmaster.uk' : domain}`;
    }

    return `www.${domain}`;
  }

  const platform = derivePlatform({ clubSiteId, deviceType, isAppview });

  let channelId;

  if (isResale || isThirdParty) {
    channelId = `internal.${
      isAppview || isMobile || isTablet
        ? 'mcommerce'
        : 'ecommerce'
    }.consumer.${deviceName}.${isAppview ? 'app' : 'web'}.${platform}.${domain}`;
  } else if (clubSiteId && isDesktop && !isAppview) {
    channelId = `www.${clubSiteId}tm.com`;
  } else {
    channelId = `${deviceName}.${domain}`;
  }

  return channelId;
}

function deriveDeviceName({ clubSiteId, deviceType, isAppview, isLiveNation, isResale, isThirdParty }) {
  const isIOS = !!window.webkit;
  const isAndroid = !!window.android;
  const isTablet = deviceType === TABLET;

  const deviceTypeToDeviceName = {
    desktop: DESKTOP,
    mobile: MOBILE,
    tablet: TABLET,
  };

  let deviceName = deviceTypeToDeviceName[deviceType];

  if (!isResale && !isThirdParty) {
    if (isTablet && clubSiteId) deviceName = deviceTypeToDeviceName.mobile;

    if (isAppview) {
      if (isIOS) {
        deviceName = isLiveNation ? WEBVIEW_LN_IPHONE : WEBVIEW_IPHONE;
      } else if (isAndroid) {
        deviceName = isLiveNation ? WEBVIEW_LN_ANDROID : WEBVIEW_ANDROID;
      } else if (isTablet) {
        deviceName = isLiveNation ? WEBVIEW_LN_IPHONE : WEBVIEW_TABLET;
      }
    }
  }

  return deviceName;
}

function derivePlatform({ clubSiteId, deviceType, isAppview }) {
  const isIOS = !!window.webkit;
  const isAndroid = !!window.android;
  const isTablet = deviceType === TABLET;

  let platform = 'browser';

  if (isAppview && !clubSiteId) {
    if (isTablet) {
      platform = 'web.view';
    } else if (isIOS) {
      platform = 'web.view.iphone';
    } else if (isAndroid) {
      platform = 'web.view.android';
    }
  } else if (isIOS) {
    platform = 'ios';
  } else if (isAndroid) {
    platform = 'android';
  }

  return platform;
}

function deriveClubSiteIdDomain(clubSiteId, isCA) {
  if (clubSiteId) return `${clubSiteId}tm.${isCA ? 'ca' : 'us'}`;

  return null;
}
/* eslint-disable complexity */
function deriveDomain(host, clubSiteId, search) {
  // for testing Canadian and Live Nation domains in nonprod and preprod
  const isQA = (/\.nonprod-tmaws\.io$/u).test(host);
  const isPreProd = (/\.preprod.ticketmaster.net$/u).test(host);
  const CHANNEL_DOMAIN_CA = 'ticketmaster.ca';
  const CHANNEL_DOMAIN_UK = 'ticketmaster.co.uk';
  const CHANNEL_DOMAIN_IE = 'ticketmaster.ie';
  const CHANNEL_DOMAIN_MX = 'ticketmaster.com.mx';
  const CHANNEL_DOMAIN_US = 'ticketmaster.us';
  const CHANNEL_DOMAIN_LN = 'livenation.us';

  if ((/domain_name=TM_CA/u).test(search) && (isQA || isPreProd)) return CHANNEL_DOMAIN_CA;
  if ((/domain_name=LN_US/u).test(search) && isQA) return CHANNEL_DOMAIN_LN;
  if ((/\.ticketmaster\.co\.uk/u).test(host) || ((/iccp-tmuk\./u).test(host) && isQA)) return CHANNEL_DOMAIN_UK;
  if ((/\.ticketmaster\.com\.mx/u).test(host) || ((/iccp-tmmx\./u).test(host) && isQA)) return CHANNEL_DOMAIN_MX;
  if ((/\.ticketmaster\.ie/u).test(host) || ((/iccp-tmie\./u).test(host) && isQA)) return CHANNEL_DOMAIN_IE;

  const hostToDomain = {
    'www.ticketmaster.com': deriveClubSiteIdDomain(clubSiteId) || CHANNEL_DOMAIN_US,
    'www.ticketmaster.ca':
    deriveClubSiteIdDomain(clubSiteId, true) || CHANNEL_DOMAIN_CA,
    'concerts.livenation.com': deriveClubSiteIdDomain(clubSiteId) || CHANNEL_DOMAIN_LN,
    'www.tmus.preprod.ticketmaster.net':
    deriveClubSiteIdDomain(clubSiteId) || CHANNEL_DOMAIN_US,
    'www.tmca.preprod.ticketmaster.net':
      deriveClubSiteIdDomain(clubSiteId) || CHANNEL_DOMAIN_CA,
    'concerts.lnus.preprod.ticketmaster.net':
      deriveClubSiteIdDomain(clubSiteId) || CHANNEL_DOMAIN_LN,
  };

  return hostToDomain[host] || CHANNEL_DOMAIN_US;
}
/* eslint-enable complexity */
