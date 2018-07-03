const initialState = {
  contactTo: {},
}

export default function contactsApp(state = initialState, action) {
  switch (action.type) {
    case 'SET_MESSAGE_CONTACT':
      return Object.assign({}, state, {
        contactTo: { ...action.contact },
      })
    default:
      return state
  }
}