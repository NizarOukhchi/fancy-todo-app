import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the right input', () => {
    const todo = {
      name: 'learn react and redux',
      done: true
    };

    const wrapper = shallow(<TodoItem todo={todo} />);
    expect(
      wrapper.containsAllMatchingElements([
        <div>learn react and redux</div>,
        <input type="checkbox" checked={true} />
      ])
    ).toEqual(true);
  });

  it('calls the right function when clicked', () => {
    const todo = {
      name: 'learn react and redux',
      done: true
    };

    const toggleTodo = jest.fn();

    const wrapper = shallow(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
    wrapper.simulate('click');

    expect(toggleTodo.mock.calls.length).toBe(1);
  });
});
