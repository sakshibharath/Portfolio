import React from 'react';
import { Element } from 'react-scroll';
import './Contacts.css';

const Contacts = () => {
    return (
        <Element name="contacts" className="contacts">
            <h2 className="contacts__title">CONTACT ME</h2>
            <div className="contacts__info">
                <p>Email: <a href="mailto:sakshibharath03@gmail.com">sakshibharath03@gmail.com</a></p>
                <p>Phone: <a href="tel:+919487362543">+91–94873 62543</a></p>
                <p>Location: Vellore, Tamil Nadu, India</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/sakshibharath" target="_blank" rel="noopener noreferrer">linkedin.com/in/sakshibharath</a></p>
                <p>GitHub: <a href="https://github.com/sakshibharath" target="_blank" rel="noopener noreferrer">github.com/sakshibharath</a></p>
                <p>Instagram: <a href="https://www.instagram.com/croknitgallery/" target="_blank" rel="noopener noreferrer">@croknitgallery</a></p>
                <p>Blog: <a href="https://cro-knitgallery.blogspot.com/" target="_blank" rel="noopener noreferrer">cro-knitgallery.blogspot.com</a></p>
            </div>
        </Element>
    );
};

export default Contacts;
