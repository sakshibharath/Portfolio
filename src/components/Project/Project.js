import React, { useState } from 'react';
import "./Project.css";
import {Link} from "react-scroll"

const Project = ({ img, title, desc, link }) => {
  const [show, setShow] = useState(false);

  return (
    <a href={link ? link : "#"} target="_blank" rel="noopener noreferrer">
      <div 
        className="project" 
        onMouseOver={() => setShow(true)} 
        onMouseLeave={() => setShow(false)}
      >
        <img src={img} alt={title} className="project__image" />

        {show && (
          <div className="project__overlay">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        )}
      </div>
    </a>
  );
};

export default Project;
