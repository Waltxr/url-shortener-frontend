export function shorturlReducer(state = [], action) {
  switch(action.type) {
    case 'SHORTEN_URL' :
      return [`http://localhost:3000/api/v1/urls/${action.payload}`]
    default:
      return state
  }
}
