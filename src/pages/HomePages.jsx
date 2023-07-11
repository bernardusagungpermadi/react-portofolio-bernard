import React, { Fragment } from 'react'
import Home from '../components/LandingPage/Home'
import About from '../components/About/About'
import { Container } from 'reactstrap'
import Skill from '../components/Skill/Skill'

function HomePages() {
  return (
    <Container>
    <Fragment>
    <Home/>
    <About />
    <Skill />
    </Fragment>
    </Container>
  )
}

export default HomePages