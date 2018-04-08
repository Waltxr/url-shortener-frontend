export function urlinputReducer(state = [], action) {
  switch(action.type) {
    case 'URL_INPUT' :
      return [...action.payload]
    default:
      return state
  }
}