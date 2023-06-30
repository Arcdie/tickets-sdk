import { getCookie, setCookie } from 'cookies';

export const processReserveRequestMetric = ({ requestId }) => {
  const cookieMetricValues = JSON.parse(getCookie(requestId) || '{}');
  const reserveStart = cookieMetricValues.RESERVE_START;

  if (reserveStart) {
    const reserveEnd = Date.now();
    const totalTime = Math.abs(reserveEnd - reserveStart);

    cookieMetricValues.RESERVE_REQUEST_TOTAL_TIME = totalTime;
    setCookie(requestId, JSON.stringify(cookieMetricValues));
  }
};
