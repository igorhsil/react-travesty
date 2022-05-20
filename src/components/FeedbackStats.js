import React, { useContext } from 'react';
import FeedbackContext from '../contex/FeedbackContext';

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // calc ratings average

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // if it's 9.0 remove '.0'
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {!isNaN(average) ? average : 0} </h4>
    </div>
  );
}
