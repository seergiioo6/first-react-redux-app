import React from 'react'

const NewTodo = ({onChange}) => (
  <div>
    <h3>Nuevo</h3>
    <input type="text" onKeyUp={onChange}/> Press ENTER 
  </div>
)

export default NewTodo