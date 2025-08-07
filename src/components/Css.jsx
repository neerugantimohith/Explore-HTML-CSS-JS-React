import { useState } from "react";

const Css = () => {
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
        CSS
      </h1>

      {showTopics && (
        <div>
          <h2>Topics Covered:</h2>
          <ul>
            <li>Selectors</li>
            <li>Simple Selector</li>
            <li>Combinator Selector</li>
            <li>Pseudo elememt selector</li>
            <li>Pseudo code selector</li>
            <li>Attributes</li>
            <li>Flex</li>
            <li>Position</li>
            <li>Box models</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Css;