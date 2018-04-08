export function shorturlReducer(state = [], action) {
  switch(action.type) {
    case 'SHORTEN_URL' :
      return [...action.payload]
    default:
      return state
  }
}
