import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
  margin-top: 50px;

  button {
    display: flex;
    flex-basis: auto;
    margin-top: 20px;
    margin-left: 30px;
  }
`;

const StyledTextField = styled(TextField)`
  flex-basis: 70%;
`;

export default class InputArea extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleInputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleButtonClick() {
    if (this.state.text) {
      this.props.onSubmit(this.state.text);
      this.setState({
        text: ''
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <StyledTextField
          label="Add new task"
          value={this.state.text}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleButtonClick}
        >
          + Add
        </Button>
      </Wrapper>
    );
  }
}
