import React from 'react';
import PropTypes from 'prop-types';

import { StyledStatistics } from './Statistics.styled';

export const Statistics = props => {
  const { state, total, positivePercentage } = props;

  return (
    <StyledStatistics>
      <ul>
        <li>
          Good: <span>{state[0]}</span>{' '}
        </li>
        <li>
          Neutral: <span>{state[1]}</span>{' '}
        </li>
        <li>
          Bad: <span>{state[2]}</span>{' '}
        </li>
        <li>
          Total: <span>{total}</span>{' '}
        </li>
        <li>
          Positive Feedback:{' '}
          <span id="positivePercentage">{positivePercentage}%</span>
        </li>
      </ul>
    </StyledStatistics>
  );
};
Statistics.propTypes = {
  state: PropTypes.object,
  total: PropTypes.any,
  positivePercentage: PropTypes.any,
};
