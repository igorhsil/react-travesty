import React from 'react';
import Card from './shared/Card';

// icons
import { FaTimes } from 'react-icons/fa';

const FeedbackItem = ({ item: { rating, text, id }, handleDelete }) => {
  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
