export function usererrorsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_ERROR' :
      return [...action.payload.toString().toLowerCase()]
    case 'REMOVE_ERROR' :
      return [...action.payload]
    default:
      return state
  }
}
