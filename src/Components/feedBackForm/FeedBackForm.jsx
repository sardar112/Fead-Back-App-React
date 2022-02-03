import { useState, useContext, useEffect } from 'react';

import FeedBackContext from '../../Context/FeedBackContext';
import RatingSelect from '../ratingSelect/RatingSelect';
import Card from '../../Shared/card/Card';
import Button from '../../Shared/button/Button';

// function FeedBackForm({ handleAddFeedback }) {
function FeedBackForm() {
  const { addFeedback, feedBackEdit, updateFeedback } =
    useContext(FeedBackContext);

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    if (feedBackEdit.isEditable) {
      setBtnDisabled(false);
      setText(feedBackEdit.item.text);
      setRating(feedBackEdit.item.rating);
    }
  }, [feedBackEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length < 10) {
      setMessage('Review Must be at least 10 characters long');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { text, rating };
      if (feedBackEdit.isEditable) {
        updateFeedback(feedBackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
      setBtnDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write your review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
