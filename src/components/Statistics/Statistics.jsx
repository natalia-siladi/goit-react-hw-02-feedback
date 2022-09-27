import React from 'react';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <ul>
        <li className={css.statisticsItem}>
          <p>Good: {good}</p>
        </li>
        <li className={css.statisticsItem}>
          <p>Neutral: {neutral}</p>
        </li>
        <li className={css.statisticsItem}>
          <p>Bad: {bad}</p>
        </li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentage}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
