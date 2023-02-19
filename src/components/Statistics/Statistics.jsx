import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledStatistics } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    const { state, total, positivePercentage } = this.props;

    return (
      <StyledStatistics>
        <ul>
          <li>
            Good: <span>{state.good}</span>{' '}
          </li>
          <li>
            Neutral: <span>{state.neutral}</span>{' '}
          </li>
          <li>
            Bad: <span>{state.bad}</span>{' '}
          </li>
          <li>
            Total: <span>{total}</span>{' '}
          </li>
          <li>
            Positive Feedback: <span id='positivePercentage'>{positivePercentage}%</span>
          </li>
        </ul>
      </StyledStatistics>
    );
  }
}
Statistics.propTypes = {
  state: PropTypes.object,
  total: PropTypes.any,
  positivePercentage: PropTypes.any,
};
