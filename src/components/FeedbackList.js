import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../contex/FeedbackContext';

export default function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <h1>No feedback data.. </h1>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((f) => (
        <FeedbackItem key={f.id} item={f} />
      ))}
    </div>
  );
}
