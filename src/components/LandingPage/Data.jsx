import React from 'react';
import { Button } from 'react-bootstrap';

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">Bernardus Agung Permadi</h1>
      <h3 className="home__subtitle">Frontend Developer</h3>
      <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, provident.</p>

      <Button href="#contact" className="button button--flex">
        Say Hello!
      </Button>
    </div>
  );
}

export default Data;
