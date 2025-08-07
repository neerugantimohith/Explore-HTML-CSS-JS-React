import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li><Link to="/Html">HTML</Link></li>
          <li><Link to="/Css">CSS</Link></li>
          <li><Link to="/Javascript">JavaScript</Link></li>
          <li><Link to="/Reactjs">ReactJS</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
