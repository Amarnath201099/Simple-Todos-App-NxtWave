// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteToDoitem} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteToDoitem(id)
  }

  return (
    <li className="eachTodoItem-style">
      <p className="title">{title}</p>
      <button className="deleteBtn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
