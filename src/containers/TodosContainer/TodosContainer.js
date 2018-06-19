import React, { Component } from 'react';
import update from 'immutability-helper';
import TodoItem from '../../components/TodoItem';
import Filter from '../../components/Filter';
import InputArea from '../../components/InputArea';

export default class TodosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          name: 'Learn react & redux',
          done: true
        },
        {
          id: 2,
          name: 'Learn Nextjs',
          done: true
        },
        {
          id: 3,
          name: 'Learn Nextjs',
          done: true
        },
        {
          id: 4,
          name: 'Learn Nextjs',
          done: true
        }
      ],
      filter: 'ALL'
    };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleTodo(todo) {
    const index = this.state.todos.indexOf(todo);
    this.setState({
      todos: update(this.state.todos, {
        [index]: { done: { $set: !todo.done } }
      })
    });
  }

  setFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  addTodo(name) {
    const todo = {
      name: name,
      done: false
    };

    this.setState({
      todos: update(this.state.todos, { $push: [todo] })
    });
  }

  render() {
    const filteredTodos = [...this.state.todos]
      .filter(item => {
        if (this.state.filter === 'COMPLETED') return item.done;
        else if (this.state.filter === 'NOT_COMPLETED') return !item.done;
        else return true;
      })
      .sort((a, b) => (b.done === a.done ? 0 : b.done ? -1 : 1));

    return (
      <div>
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        {filteredTodos.map((item, index) => (
          <TodoItem key={index} todo={item} toggleTodo={this.toggleTodo} />
        ))}
        <InputArea onSubmit={this.addTodo} />
      </div>
    );
  }
}
