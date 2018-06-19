import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Filter from './Filter';

describe('Filter', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the right input', () => {
    const filter = 'NOT_COMPLETED';
    const wrapper = shallow(<Filter filter={filter} />);

    expect(
      wrapper.containsAllMatchingElements([
        <a>All</a>,
        <a className="active">Not completed</a>,
        <a>Completed</a>
      ])
    ).toEqual(true);
  });

  it('call the right function when a filter is clicked', () => {
    const setFilter = jest.fn();
    const wrapper = shallow(<Filter setFilter={setFilter} />);
    const notCompletedFilter = wrapper.find('div a').at(1);
    notCompletedFilter.simulate('click');

    expect(setFilter.mock.calls.length).toBe(1);
    expect(setFilter.mock.calls[0][0]).toBe('NOT_COMPLETED');
  });
});
