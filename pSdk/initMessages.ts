export const getInitMessages = (eventId: string): any[] => [{
  payload: {},
  type : 'connection_init',
}, {
  id: 1,
  type: 'start',
  payload: {
    variables:{
      eventId,
      lastReceivedVersion: null,
    },
    extensions: {},
    operationName: 'AvailabilityChanged',
    query: 'subscription AvailabilityChanged($eventId: String!, $unlockToken: String, $lastReceivedVersion: String, $displayId: String) {\n availability(\n eventId: $eventId\n unlockToken: $unlockToken\n lastReceivedVersion: $lastReceivedVersion\n displayId: $displayId\n ) {\n buffer\n __typename\n }\n}\n',
  }
}];