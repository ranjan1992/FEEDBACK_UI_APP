import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import Feedbackdata from './data/feedbackdata';

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete ?'))
      setFeedback(feedback.filter((item) => item.id != id));
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
