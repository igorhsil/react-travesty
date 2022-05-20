import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

import FeedbackForm from './components/FeedbackForm';

import About from './pages/About';
import AboutPageIcon from './components/AboutPageIcon';

import { FeedbackProvider } from './contex/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackStats />
                  <FeedbackForm />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<About />} />
          </Routes>

          <AboutPageIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
