export const reserveStatusQuery = `
  query getReserveStatus($requestId: String!) {
    getReserveStatus(requestId: $requestId) {
      accessTokenValid
      errors {
        code
        data {
          key
          value
        }
        message
      }
      requestId
      requestorId
      requiresSessionInvalidation
      status
      ticketOrderItems {
        expirationTime
        ticketTypes {
          priceDetails {
            serviceCharges {
              currencyCode
              value
            }
          }
        }
      }
    }
  }
`;
