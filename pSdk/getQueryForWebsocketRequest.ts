export default () => `
  subscription reserveComplete($requestorId:String!) {
    reserveComplete(requestorId: $requestorId) {
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
