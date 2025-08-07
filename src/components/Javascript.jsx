import { useState } from "react";

const Javascript = () => {
  const [showTopics, setShowTopics] = useState(false);

  const toggleTopics = () => {
    setShowTopics(!showTopics);
  };

  return (
    <div>
      <h1 
        onClick={toggleTopics} 
        style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
      >
        Javascript
      </h1>

      {showTopics && (
        <div>
          <h2>Topics Covered:</h2>
          <ul>
            <li>Toens</li>
            <li>Where,Let,Const</li>
            <li>Hoisting</li>
            <li>Primitive String Methods</li>
            <li>Data Types</li>
            <li>Functions</li>
            <li>Objects</li>
            <li>Conditions</li>
            <li>Operations</li>
            <li>Json</li>
            <li>Ajax</li>
            <li>Promises</li>
            <li>Async & Await</li>
            <li>Event Propogation</li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Javascript ;