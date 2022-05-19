import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}
