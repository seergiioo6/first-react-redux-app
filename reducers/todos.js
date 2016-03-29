import Immutable from 'immutable'

export default (state = Immutable.List(['Sergio Andres']), action) => {
  switch(action.type) {
    case 'addTodo':
      return state.push(action.todo)
    case 'deleteTodo':
      return state.filter((todo, index) => index !== action.index)
    default:
      return state
  }
}