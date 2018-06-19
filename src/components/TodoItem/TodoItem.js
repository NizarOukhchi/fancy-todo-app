import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
  font-family: Helvetica, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
  cursor: pointer;

  > div {
    color: #373737;
    margin-left: 15px;
  }

  &.checked {
    > div {
      color: #cccccc;
      text-decoration: line-through;
    }
  }

  > input[type='checkbox'] {
    -webkit-appearance: none;
    background-color: #fff;
    border: 2px solid #f1f3f7;
    padding: 12px;
    display: inline-block;
    position: relative;
    cursor: pointer;

    &:checked {
      background-color: #f1f3f7;
    }

    &:checked:after {
      content: '\\2714';
      font-size: 14px;
      position: absolute;
      top: 3px;
      left: 5px;
      color: #fff;
    }
  }
`;

const TodoItem = ({ todo, toggleTodo }) =>
  todo ? (
    <Item
      className={todo.done ? 'checked' : ''}
      onClick={() => toggleTodo(todo)}
    >
      <input type="checkbox" checked={todo.done} /> <div>{todo.name}</div>
    </Item>
  ) : null;

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoItem;
