import React, { useState } from 'react';
import Card from './shared/Card';

export default function FeedbackForm() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
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
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}
