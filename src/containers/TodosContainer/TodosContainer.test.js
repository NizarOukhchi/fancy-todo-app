import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TodosContainer from './TodosContainer';
import TodoItem from '../../components/TodoItem';

describe('TodosContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodosContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the right children', () => {
    const wrapper = shallow(<TodosContainer />);
    expect(
      wrapper.containsAllMatchingElements([
        <TodoItem />,
        <TodoItem />,
        <TodoItem />
      ])
    ).toEqual(true);
  });
});
