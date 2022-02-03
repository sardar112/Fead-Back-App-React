import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
// import PropTypes from 'prop-types';
import FeedbackContext from '../../Context/FeedBackContext';

import Card from '../../Shared/card/Card';
// function FeedBackItem({ feedBackItem, deleteFeedback }) {
function FeedBackItem({ feedBackItem }) {
  const { deletedItemFromList, isEditableFeedback } =
    useContext(FeedbackContext);

  return (
    <Card className='card'>
      <div className='num-display'>{feedBackItem.rating}</div>
      <button
        onClick={() => deletedItemFromList(feedBackItem.id)}
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <button onClick={() => isEditableFeedback(feedBackItem)} className='edit'>
        <FaEdit color='purple' />
      </button>

      <div className='text-display' style={{ fontSize: '1.2rem' }}>
        {feedBackItem.text}
      </div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

// FeedBackItem.prototype = {
//   item: PropTypes.object.isRequired,
// };
export default FeedBackItem;
