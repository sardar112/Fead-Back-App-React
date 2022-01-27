import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './FeedBackItem.css';

import Card from '../../shared/card/Card';
function FeedBackItem({ feedBackItem, deleteFeedback }) {
  return (
    <Card className='card'>
      <div className='num-display'>{feedBackItem.rating}</div>
      <button onClick={() => deleteFeedback(feedBackItem.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedBackItem.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedBackItem.prototype = {
  item: PropTypes.object.isRequired,
};
export default FeedBackItem;
