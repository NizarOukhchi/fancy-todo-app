import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFilter = styled.div`
  font-family: Helvetica, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;

  > span {
    color: #828ac4;
  }

  > div {
    color: #a7a7a7;

    a {
      margin: 0 10px;
      cursor: pointer;

      &:not(:last-child):after {
        margin-left: 20px;
        color: #a7a7a7;
        content: '|';
      }

      &.active {
        color: #828ac4;
      }
    }
  }
`;

const Filter = ({ filter = 'ALL', setFilter }) => (
  <StyledFilter>
    <span>Tasks</span>
    <div>
      <a
        className={filter === 'ALL' ? 'active' : ''}
        onClick={() => setFilter('ALL')}
      >
        All
      </a>
      <a
        className={filter === 'NOT_COMPLETED' ? 'active' : ''}
        onClick={() => setFilter('NOT_COMPLETED')}
      >
        Not completed
      </a>
      <a
        className={filter === 'COMPLETED' ? 'active' : ''}
        onClick={() => setFilter('COMPLETED')}
      >
        Completed
      </a>
    </div>
  </StyledFilter>
);

Filter.prototypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func
};

export default Filter;
