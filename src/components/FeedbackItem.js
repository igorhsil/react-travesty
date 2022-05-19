import React from 'react';
import Card from './shared/Card';

const FeedbackItem = ({ item: { rating, text } }) => {
  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
