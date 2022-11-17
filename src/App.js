import { useState } from "react";

import React from 'react'

import { answerChecker, ImageHolder, fileSet } from "./components/SetGame";

const App = () => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    console.log('answer: ', userAnswer);
    fileSet(userAnswer)
    setUserAnswer('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="first_name"
          name="first_name"
          type="text"
          onChange={event => setUserAnswer(event.target.value)}
          value={userAnswer}
        />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};


export default App


