export function topurlsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_TOP_URLS' :
      return [...action.payload]
    default:
      return state
  }
}