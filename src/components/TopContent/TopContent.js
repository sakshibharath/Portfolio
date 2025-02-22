import React from 'react'
import "./TopContent.css"
import {Link} from "react-scroll"

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Ms.Sakshi B</h1>
            <p>A Front End developing Ethusiast</p>
            <p className="content">I'm Sakshi B a Frontend Developer and UI/UX Designer skilled in React.js, Figma, and responsive design. i have been working on intuitive UI designs, responsive websites, and a personal portfolio. With experience in user research, prototyping, and cloud computing fundamentals, i focus on crafting seamless and accessible digital experiences.</p>
            <a href="https://vitacin-my.sharepoint.com/:b:/g/personal/sakshi_b2021_vitstudent_ac_in/Ea_nV3j8HzVEuk-rQVJIQT8B4CYORtB1NnsiuSQe6un8Mg?e=XAae6r"target="_blank" rel="noopener noreferrer">
                 <button className="topContent__downloadbutton">Download Resume</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
            <button className="topContent__workbutton">My Work</button>
            </Link>

        </div>
    </div>
  );
};

export default TopContent
