import React, { useState } from 'react';

import { Container } from './Container/Container.styled';
import { FeedbackForm } from './FeedbackForm/FeedbackForm';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countZero = () => {
    if (countTotalFeedback() === 0) {
      return true;
    } else {
      return false;
    }
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((good / countTotalFeedback()) * 100);
  };

  const handleClick = e => {
    switch (e.currentTarget.value) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Incorrect Feedback option!');
    }
  };
  const btnNames = ['Good', 'Neutral', 'Bad'];

  return (
    <div className="App">
      <Container>
        <section>
          <FeedbackForm options={btnNames} onLeaveFeedback={handleClick} />
          {countZero() ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              state={[good, neutral, bad]}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </section>
      </Container>
    </div>
  );
};

export default App;
