import { useState } from "react";

const Html = () => {
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
        HTML
      </h1>

      {showTopics && (
        <div>
          <h2>Topics Covered:</h2>
          <ul>
            <li>Elements</li>
            <li>Tags</li>
            <li>List</li>
            <li>Table</li>
            <li>Anchor Tags</li>
            <li>IFrames</li>
            <li>Semantic Tags</li>
            <li style={{ color: "red", fontWeight: "bold" }}>DAMN STAFF</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Html;