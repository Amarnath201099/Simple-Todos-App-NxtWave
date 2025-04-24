import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTodoTitle: '',
    newTodoCount: 1,
  }

  deleteToDoitem = id => {
    const {todosList} = this.state

    const filteredToDosList = todosList.filter(eachtodo => eachtodo.id !== id)

    this.setState({todosList: filteredToDosList})
  }

  updateNewTodo = event => {
    this.setState({newTodoTitle: event.target.value})
  }

  addTodo = () => {
    let {newTodoTitle} = this.state
    let newTodoCount = 1

    const words = newTodoTitle.trim().split(' ')
    const lastWord = words[words.length - 1]

    if (!Number.isNaN(Number(lastWord)) && lastWord.trim() !== '') {
      newTodoCount = parseInt(lastWord, 10)
      words.pop()
      newTodoTitle = words.join(' ')
    }

    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle.trim(),
      completed: false,
    }))

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }

  updateExistingTodoItem = todoDetails => {
    const {todosList} = this.state
    const {id, updatedTitle} = todoDetails
    const newTodoList = todosList.map(eachTodo => {
      if (id === eachTodo.id) {
        return {...eachTodo, title: updatedTitle}
      }
      return eachTodo
    })
    this.setState({todosList: newTodoList})
  }

  toggleComplete = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todosList: updatedTodoList})
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="bg-container">
        <div className="todoList-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Add New Todo"
              className="todo-input"
              onChange={this.updateNewTodo}
            />
            <button type="button" className="add-btn" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <ul className="todoListItems">
            {todosList.map(eachtodo => (
              <TodoItem
                todoDetails={eachtodo}
                deleteToDoitem={this.deleteToDoitem}
                key={eachtodo.id}
                updateExistingTodoItem={this.updateExistingTodoItem}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
