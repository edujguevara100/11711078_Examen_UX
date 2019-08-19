import React, { Component } from 'react';
import Agregar from './Agregar';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      Nombre: '',
      Oficio: '',
      Descripción: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      Nombre: '',
      Oficio: '',
      Descripción: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="Nombre"
              className="form-control"
              value={this.state.Nombre}
              onChange={this.handleInputChange}
              placeholder="Nombre"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Oficio"
              className="form-control"
              value={this.state.Oficio}
              onChange={this.handleInputChange}
              placeholder="Oficio"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Descripción"
              className="form-control"
              value={this.state.Descripción}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
          </div>
          <Agregar/>
        </form>
      </div>
    )
  }

}

export default TodoForm;
