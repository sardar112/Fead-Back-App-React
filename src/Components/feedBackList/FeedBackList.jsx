import PropTypes from 'prop-types';

import FeedBackItem from '../feedBackItem/FeedBackItem';
function FeedBackList({ feedBack, deletedItemFromList }) {
  if (!feedBack || !feedBack.length) {
    return <p>No FeedBack Yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedBack.map((item) => (
        <FeedBackItem
          key={item.id}
          feedBackItem={item}
          deleteFeedback={deletedItemFromList}
        />
      ))}
    </div>
  );
}

FeedBackList.propTypes = {
  feedBack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedBackList;
