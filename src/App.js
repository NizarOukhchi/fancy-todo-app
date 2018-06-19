import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TodoContainer from './containers/TodosContainer';
import ActivitiesContainer from './containers/ActivitiesContainer';

const StyledPaper = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 20px auto;

  > div:nth-child(1) {
    width: calc(100% / 12 * 7);
    padding: 30px 50px;
  }

  > div:nth-child(2) {
    width: calc(100% / 12 * 5);
    padding: 30px 50px;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledPaper elevation={16}>
        <TodoContainer />
        <ActivitiesContainer />
      </StyledPaper>
    );
  }
}

export default App;
