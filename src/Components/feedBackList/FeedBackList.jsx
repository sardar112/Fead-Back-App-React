// import PropTypes from 'prop-types';
import { useContext } from 'react';

import FeedBackItem from '../feedBackItem/FeedBackItem';
import FeedbackContext from '../../Context/FeedBackContext';
import SpinnerGif from '../../Shared/spinner/SpinnerGif';
// function FeedBackList({ feedBack, deletedItemFromList }) { No longo need that props now
function FeedBackList() {
  const { feedBack, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedBack || !feedBack.length)) {
    return <p>No FeedBack Yet</p>;
  }
  return isLoading ? (
    <SpinnerGif />
  ) : (
    <div className='feedback-list'>
      {feedBack.map((item) => (
        <FeedBackItem
          key={item.id}
          feedBackItem={item}
          // deleteFeedback={deletedItemFromList}
        />
      ))}
    </div>
  );
}

// FeedBackList.propTypes = {
//   feedBack: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }; code commenting bcz we no longer need that bcz of context

export default FeedBackList;
