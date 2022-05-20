import React, { useContext } from 'react';
import FeedbackContext from '../contex/FeedbackContext';
import Card from './shared/Card';

// icons
import { FaTimes } from 'react-icons/fa';

const FeedbackItem = ({ item: { rating, text, id } }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
