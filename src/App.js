import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [answer, setAnswer] = useState(null);

  const onAskClick = () => {
    setAnswer({
      answer: 'no',
      image: 'https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif'
    })
  };

  return (
    <div className="App">
      <div className="question">
        <br />
        <input type="text" />
        <br />
        <br />
        <button type="submit" onClick={onAskClick}>
          Ask The Q!
        </button>
      </div>

      <br />
      <br />

      {
        answer && (
          <div className="answer">
          <h1>{answer.answer}</h1>
          <img src={answer.image} alt ="answer.answer" />
        </div>
        )
      }
    </div>
  );
};

export default App;
