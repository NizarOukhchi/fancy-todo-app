import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Cell } from 'styled-css-grid';

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
      <Grid columns={12} alignContent="center">
        <Cell width={9} middle>
          <TextField
            label="Add new task"
            value={this.state.text}
            onChange={this.handleInputChange}
            margin="normal"
          />
        </Cell>
        <Cell width={3} middle>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleButtonClick}
            style={{ top: '10px' }}
          >
            + Add
          </Button>
        </Cell>
      </Grid>
    );
  }
}
