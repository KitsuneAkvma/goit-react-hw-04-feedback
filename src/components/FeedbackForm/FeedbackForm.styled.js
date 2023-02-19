import styled from 'styled-components';

const feedbackColors = {
  good: '#4ac959',
  neutral: '#c9c94a',
  bad: '#c94c4a',
};

export const StyledFeedbackForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3em;
    font-weight: 900;
    letter-spacing: 0.05em;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0;

    list-style: none;
  }
`;

export const Button = styled.button`
  width: 8rem;
  height: 3rem;

  background-color: ${({ value }) => feedbackColors[value]};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 0.15em;

  transition: transform 0.3s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;
