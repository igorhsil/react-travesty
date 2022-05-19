import { logDOM } from '@testing-library/react';
import React from 'react';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <h1>No feedback data.. </h1>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((f) => (
        <FeedbackItem key={f.id} item={f} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
