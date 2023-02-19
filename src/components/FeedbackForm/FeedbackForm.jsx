import React from 'react';

import { StyledFeedbackForm, Button } from './FeedbackForm.styled';

import shortid from 'shortid';
import PropTypes from 'prop-types';

export const FeedbackForm = props => {
  const { options, onLeaveFeedback } = props;

  return (
    <StyledFeedbackForm>
      <h2>Please leave feedback</h2>
      <ul>
        {options.map(btn => {
          return (
            <li key={shortid.generate()}>
              <Button value={btn} type="button" onClick={onLeaveFeedback}>
                {btn.charAt(0).toUpperCase() + btn.slice(1)}
              </Button>
            </li>
          );
        })}
      </ul>
    </StyledFeedbackForm>
  );
};

FeedbackForm.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
