import React from 'react';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        {options.map(option => (
          <li>
            <button onclick={onLeaveFeedback} name={option}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
