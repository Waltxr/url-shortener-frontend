export function shorturlReducer(state = [], action) {
  switch(action.type) {
    case 'SHORTEN_URL' :
      return [`https://shortenurll.herokuapp.com/api/v1/urls/${action.payload}`]
    default:
      return state
  }
}
