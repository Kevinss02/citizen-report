import PropTypes from 'prop-types';
import React from 'react';

import './question.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Question = (props: any) => {
  return (
    <div className='question-container'>
      <span className='question-text heading4'>{props.Question}</span>
      <span className='question-text1'>{props.Answer}</span>
    </div>
  );
};

Question.defaultProps = {
  Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  Question: 'What types of cars do you sell?',
};

Question.propTypes = {
  Answer: PropTypes.string,
  Question: PropTypes.string,
};

export default Question;
