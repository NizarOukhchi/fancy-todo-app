import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchActivities } from '../../actions/activities';
import ActivityItem from '../../components/ActivityItem';

const Wrapper = styled.div`
  background: #f1f3fc;
  border-left: 2px solid #e7e8ee;

  > span {
    color: #8189c4;
  }

  ul{
      margin-top: 20px
      padding: 0;
  }
`;

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchActivities();
  }

  render() {
    return (
      <Wrapper>
        <span>Activities</span>
        <ul>
          {this.props.activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchActivities: bindActionCreators(fetchActivities, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    activities: state.activities.list
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesContainer);
