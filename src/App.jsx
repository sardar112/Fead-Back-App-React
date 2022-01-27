import { useState } from 'react';

import Header from './components/Layouts/header/Header';
import Footer from './components/Layouts/footer/Footer';
import FeedBackList from './components/Pages/feedBackList/FeedBackList';
import FeedBackStats from './components/Pages/feedBackStats/FeedBackStats';

import FeedbackData from './utils/data/FeedbackData';

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
