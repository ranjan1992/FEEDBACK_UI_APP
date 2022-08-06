import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, onDelete }) {
  if (!feedback || feedback.length == 0) {
    return <p>No Feedback Yet !!!</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={onDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;
