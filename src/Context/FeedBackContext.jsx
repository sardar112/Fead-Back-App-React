import { createContext, useState, useEffect } from 'react';

// import FeedbackData from '../Utils/data/FeedbackData';//Now data is comming from db.json

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedBack, setFeedBack] = useState([]);
  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    isEditable: false,
  });
  useEffect(() => {
    fetchFeedData();
  }, []);

  // Fetch FeedbackData
  const fetchFeedData = async () => {
    const data = await (
      await fetch(`${process.env.REACT_APP_API_URL}/feedback`)
    ).json();
    setFeedBack(data);
    setIsLoading(false);
  };
  //Add Feed Back
  const addFeedback = async (newFeedBack) => {
    const data = await (
      await fetch(`${process.env.REACT_APP_API_URL}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFeedBack),
      })
    ).json();
    // newFeedBack.id = Math.floor(Math.random() * 1000);
    setFeedBack([data, ...feedBack]);
  };

  //Delete Feed Back
  const deletedItemFromList = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback')) {
      await fetch(`${process.env.REACT_APP_API_URL}/feedback/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };

  //Update the feedback
  const updateFeedback = async (id, updItem) => {
    const res = await (
      await fetch(`${process.env.REACT_APP_API_URL}/feedback/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updItem),
      })
    ).json();

    setFeedBack(
      feedBack.map((item) => (item.id === id ? { ...item, ...res } : item))
    );
  };
  //set item to be updated
  const isEditableFeedback = (item) => {
    setFeedBackEdit({ item, isEditable: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedBack,
        deletedItemFromList,
        addFeedback,
        feedBackEdit,
        isEditableFeedback,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
