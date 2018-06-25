import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoItem from '../../components/TodoItem';
import Filter from '../../components/Filter';
import InputArea from '../../components/InputArea';
import { bindActionCreators } from 'redux';
import { addTask, toggleTask, fetchTasks } from '../../actions/tasks';

const TasksWrapper = styled.div`
  height: 300px;
  overflow: scroll;
`;
class TodosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'ALL'
    };

    this.setFilter = this.setFilter.bind(this);
    this.renderItemList = this.renderItemList.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  setFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  renderItemList(todos, filter) {
    const filteredTodos = [...todos]
      .filter(item => {
        if (filter === 'COMPLETED') return item.done;
        else if (filter === 'NOT_COMPLETED') return !item.done;
        else return true;
      })
      .sort((a, b) => (b.done === a.done ? 0 : b.done ? -1 : 1));
    if (filteredTodos.length > 0) {
      return filteredTodos.map((item, index) => (
        <TodoItem key={index} todo={item} toggleTodo={this.props.toggleTask} />
      ));
    } else {
      return <p>There is no task in this filter</p>;
    }
  }

  render() {
    return (
      <div>
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        <TasksWrapper>
          {' '}
          {this.renderItemList(this.props.todos, this.state.filter)}
        </TasksWrapper>

        <InputArea onSubmit={this.props.addTask} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
    toggleTask: bindActionCreators(toggleTask, dispatch),
    fetchTasks: bindActionCreators(fetchTasks, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    todos: state.tasks.list
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
