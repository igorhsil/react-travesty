import React, { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import Rating from './Rating';
import FeedbackContext from '../contex/FeedbackContext';

export default function FeedbackForm() {
  const [input, setInput] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setInput(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleInputChange = (e) => {
    if (input === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (input !== '' && input.trim().length <= 9) {
      setBtnDisabled(true);
      setMessage('Message has to be at least 10 characers long');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check again input length
    if (input.trim().length >= 10) {
      const newFeedback = {
        text: input,
        rating,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setInput('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <Rating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            name=""
            id=""
            placeholder="Write a review"
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
