export function usererrorsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_ERROR' :
      return state.concat([action.payload])
    case 'REMOVE_ERROR' :
      return state = []
    default:
      return state
  }
}
