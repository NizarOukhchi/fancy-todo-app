import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import InputArea from './InputArea';

describe('InputArea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputArea />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the right input', () => {

  });

  it('call the right function when add button is clicked', () => {

  });
});
