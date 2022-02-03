// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Layouts/header/Header';
import Footer from './Layouts/footer/Footer';

import FeedBackList from './Components/feedBackList/FeedBackList';
import FeedBackStats from './Components/feedBackStats/FeedBackStats';
import FeedBackForm from './Components/feedBackForm/FeedBackForm';
import AboutIconLink from './Components/aboutIconLink/AboutIconLink';

import AboutPage from './Pages/about/AbputPage';

import { FeedbackProvider } from './Context/FeedBackContext';
// import FeedbackData from './Utils/data/FeedbackData';

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedBack) => {
  //   newFeedBack.id = Math.floor(Math.random() * 2);
  //   setFeedback([newFeedBack, ...feedback]);
  // };

  // const deletedItemFromList = (id) => {
  //   if (window.confirm('Are you sure you want to delete this feedback')) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  return (
    //Without Context
    //   <Router>
    //     <Header />
    //     <div className='container'>
    //       <Routes>
    //         <Route
    //           exact
    //           path='/'
    //           element={
    //             <>
    //               <FeedBackForm handleAddFeedback={addFeedback} />
    //               <FeedBackStats feedback={feedback} />
    //               <FeedBackList
    //                 feedBack={feedback}
    //                 deletedItemFromList={deletedItemFromList}
    //               />
    //             </>
    //           }
    //         ></Route>
    //         <Route path='/about' element={<AboutPage />} />
    //       </Routes>
    //       <AboutIconLink />
    //     </div>

    //     <Footer />
    //   </Router>
    //With context
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>

        <Footer />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
