import React, { Component } from 'react';
import Icon from './components/Icon';
import './App.css';
import Head from './components/Head';
import Title from './components/Title';

import { todos } from './todos.json';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    var datos = JSON.stringify(this.state.todos);
    localStorage.setItem('datos', datos);
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.Nombre}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.Oficio}
              </span>
            </div>
            <div className="card-body">
              {todo.Descripción}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Contratar
              </button>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="App">
        <Title/>
        <Head/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <Icon/>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
