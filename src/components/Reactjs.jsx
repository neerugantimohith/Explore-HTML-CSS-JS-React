import { useState } from "react";

const Reactjs = () => {
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
        React
      </h1>

      {showTopics && (
        <div>
          <h2>Topics Covered:</h2>
          <ul>
            <li>Props</li>
            <li>Class</li>
            <li>Object</li>
            <li>Hooks</li>
            <li>Sorting</li>
            <li>USe state</li>
            <li>Mapping</li>
            <li> React-Router-Dom</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reactjs ;