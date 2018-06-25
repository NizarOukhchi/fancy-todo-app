import React from 'react';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';

const Wrapper = styled.li`
  position: relative;
  list-style: none;
  padding: 5px 0px 5px 45px;
  margin-top: 15px;

  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 5px;
    bottom: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #6871b2;
  }

  > time {
    display: block;
    margin-bottom: 10px;
    color: #b3b3b3;
    font-size: 0.9em;
  }

  > div {
    color: #373737;
    span {
      color: #828ac4;
    }
  }
`;

const VerticalLine = styled.span`
  position: absolute;
  left: 4px;
  top: 18px;
  width: 1px;
  background: #6871b2;
  height: calc(100% + 5px);
`;

const ActivityItem = ({ date, task, action }) => (
  <Wrapper>
    <TimeAgo minPeriod={30} date={date} />
    <div>
      <span>{action}:</span> {task}
    </div>
    <VerticalLine />
  </Wrapper>
);

export default ActivityItem;
