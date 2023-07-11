import React from 'react';
import './about.css';
import AboutImg from '../../assets/agung.png';
import CV from '../../assets/Bernard-cv.pdf';
import Info from './Info';
import { Button } from 'reactstrap';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit enim laborum necessitatibus ratione sunt, quidem eum. Pariatur alias id consequuntur?
          </p>

          <Button variant="primary" href={CV} download>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
