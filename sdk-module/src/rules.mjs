import { RADIX_DECIMAL } from './constants/math.mjs';
import { SYSTEM_CO2, SYSTEM_RCO, WILDCARD_MATCH } from './constants/system.mjs';

const matchByEventId = (eventId, rule = {}) => eventId &&
  rule.eventId &&
  (rule.eventId === WILDCARD_MATCH || rule.eventId === eventId);

const matchByInventoryType = ({ inventoryDetail: { type } = {} }, { inventoryType } = {}) => inventoryType &&
    (inventoryType === WILDCARD_MATCH || (type && inventoryType.split(',').includes(type)));

const matchByTicketType = ({ ticketTypes: [{ id }] } = {}, { ticketType } = {}) => ticketType &&
  (ticketType === WILDCARD_MATCH || (id && ticketType.split(',').includes(id)));

const isValidPercentage = (n) => {
  if (!['number', 'string'].includes(typeof n)) return false;

  const matches = n.toString().match(/^[0-9]*$/ug);

  return !!matches && !!matches.length && parseInt(n, RADIX_DECIMAL) >= 0 && parseInt(n, RADIX_DECIMAL) <= 100;
}

export const getMatchingRules = ({ eventId, tickets = [] } = {}, rules = []) => {
  const matchingRules = [];
  if (!eventId || !rules || !rules.length || !tickets || !tickets.length) return matchingRules;

  const rulesByPriority = [...rules].sort((a, b) => {
    let comparison = 0;
    if (parseInt(a.priority, RADIX_DECIMAL) > parseInt(b.priority, RADIX_DECIMAL)) {
      comparison = 1;
    } else if (parseInt(a.priority, RADIX_DECIMAL) < parseInt(b.priority, RADIX_DECIMAL)) {
      comparison = -1;
    }
    return comparison;
  });

  for (const ticket of tickets) {
    for (const rule of rulesByPriority) {
      if (matchByEventId(eventId, rule) &&
        matchByInventoryType(ticket, rule) &&
        matchByTicketType(ticket, rule)) {
        matchingRules.push(rule);
        break;
      }
    }
  }

  return matchingRules;
}

export const getSystemFromRules = (rules) => {
  let percentageRule;
  let system = null;
  // Return null if list of matching rules is empty
  if (!rules || !rules.length) return system;

  for (const rule of rules) {
    // Ignore falsy rules or rules without a system defined
    if (rule && rule.system) {
      ({ system } = rule);
      // Return 1st non-CO2 system if a matching rule is found without a valid percentage defined or percentage === 100
      if (
        system !== SYSTEM_CO2 &&
        (!isValidPercentage(rule.percentage) || parseInt(rule.percentage, RADIX_DECIMAL) === 100)
      ) {
        return system;
      }
      // If rule has a valid percentage defined compare with currently defined percentage rule and overwrite if percentage is lower
      if (
        isValidPercentage(rule.percentage) &&
        (!percentageRule || parseInt(rule.percentage, RADIX_DECIMAL) <= percentageRule.percentage)
      ) {
        percentageRule = rule;
      }
    }
  }

  if (typeof percentageRule !== 'undefined') {
    // Integer between 1 - 100 inclusive
    const chance = Math.floor(Math.random() * 100) + 1;
    const { percentage, system } = percentageRule;

    // Return system when chance is less than or equal to percentage
    if (chance <= percentage) {
      return system;
    }

    // Return correct alternate system when change is greater than percentage
    return system === SYSTEM_CO2 ? SYSTEM_RCO : SYSTEM_CO2;
  }

  return system;
}

export const isCO2 = (system) => system === SYSTEM_CO2;
