import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

import feedbackData from './components/data/seed';
import FeedbackForm from './components/FeedbackForm';

import About from './pages/About';
import AboutPageIcon from './components/AboutPageIcon';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete a feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([newFeedback, ...feedback]);
    // console.log(newFeedback);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <FeedbackStats feedback={feedback} />
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<About />} />
        </Routes>

        <AboutPageIcon />
      </div>
    </Router>
  );
}

export default App;
