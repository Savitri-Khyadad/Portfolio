import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <p>A self-motivated and an ambitious individual seeking a career opportunity as a full stack web developer. A quick learner with exceptional problem solving and analytical skills with an ability to collaborate.</p>
            <br></br>
            <h3>Skills</h3>
            <br></br>
            <div className="row">
                <div className="column">
                <ul id="list">
                    <li>C</li>
                    <li>C++</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Reactjs</li>
                    <li>Python</li>
                </ul>
                </div>
                <div className="column">
                <ul id="list">
                    <li>Machine Learning</li>
                    <li>Tensorflow</li>
                    <li>Keras</li>
                    <li>MongoDB</li>
                    <li>Nodejs</li>
                    <li>Angular</li>
                </ul>
                </div>
                <div className="column">
                <ul id="list">
                    <li>Bootstrap</li>
                    <li>Java</li>
                    <li>Git</li>
                    <li>Latex</li>
                </ul>
                </div>
            </div>
            <br></br>
            <h3>Internships</h3>
            <br></br>
            <p>Junior Web Developer Intern at <strong>Transil Technologies Private Limited</strong>.</p>
            <p>Worked on a web based education application using React and acquired decision-making, 
            communication and planning skills by working in a collaborative environment.</p>
            <br></br>
            <h3>Interests</h3>
            <br></br>
            <div className="row">
                <div className="column">
                <ul id="list">
                    <li>Web Development</li>
                    <li>Competitive Coding</li>
                    <li>Badminton</li>
                    <li>Sketching</li>
                </ul>
                </div>
            </div>
        </div >
    )
}

export default About;
