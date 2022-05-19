import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

import feedbackData from './components/data/seed';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
