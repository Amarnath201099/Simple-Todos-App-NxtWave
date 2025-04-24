// Write your code here
import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState('')
  const {
    todoDetails,
    deleteToDoitem,
    updateExistingTodoItem,
    toggleComplete,
  } = props
  const {title, id, completed} = todoDetails

  const onDelete = () => {
    deleteToDoitem(id)
  }

  const onEdit = () => {
    setIsEditing(true)
    setUpdatedTitle(todoDetails.title)
  }

  const onSave = () => {
    setIsEditing(false)
    setUpdatedTitle(updatedTitle)
    updateExistingTodoItem({id, updatedTitle})
  }

  const onChangeUpdateTitle = event => {
    setUpdatedTitle(event.target.value)
  }

  return (
    <li className="eachTodoItem-style">
      {isEditing ? (
        <>
          <input
            type="text"
            className="edit-input-style"
            value={updatedTitle}
            onChange={onChangeUpdateTitle}
          />
          <button className="each-todo-save-Btn" type="button" onClick={onSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todoDetails.completed}
            onChange={() => toggleComplete(todoDetails.id)}
          />
          <p
            className={`title ${todoDetails.completed ? 'todo-completed' : ''}`}
          >
            {title}
          </p>
          <button className="each-todo-Btn" type="button" onClick={onEdit}>
            Edit
          </button>
          <button className="each-todo-Btn" type="button" onClick={onDelete}>
            Delete
          </button>
        </>
      )}
    </li>
  )
}

export default TodoItem
