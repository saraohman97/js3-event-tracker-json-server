
const actiontypes = () => {
  return {
    events: {
        setEvents: 'SET_EVENTS',
        loading: 'LOADING',
        eventsFailure: 'EVENTS_FAILURE',
        addNewEvent: 'ADD_NEW_EVENT'
    },
    event: {
      loadEventStart: 'LOAD_EVENT_START',
      loadEventSuccess: 'LOAD_EVENT_SUCCESS',
      loadEventFailure: 'LOAD_EVENT_FAILURE',
      clearEvent: 'CLEAR_EVENT'
    }
  }
}

export default actiontypes