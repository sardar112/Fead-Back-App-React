import { useState } from 'react';

import Header from './Layouts/header/Header';
import Footer from './Layouts/footer/Footer';
import FeedBackList from './Components/feedBackList/FeedBackList';
import FeedBackStats from './Components/feedBackStats/FeedBackStats';

import FeedbackData from './Utils/data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deletedItemFromList = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />

      <div className='container'>
        <FeedBackStats feedback={feedback} />
        <FeedBackList
          feedBack={feedback}
          deletedItemFromList={deletedItemFromList}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
