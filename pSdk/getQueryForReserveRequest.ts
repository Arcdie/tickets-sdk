export default () => `
  mutation reserve($reserveInput:ReserveInput!) {
    reserve(reserveInput:$reserveInput) {
      errors {
        code
        data {
          key
          value
        }
        message
      }
      requestId
      status
    }
  }
`;
