import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

export default function FeedbackForm() {
  const [input, setInput] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // e.preventDefault();

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
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
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
