import React, { Fragment } from 'react'
import Home from '../components/LandingPage/Home'
import About from '../components/About/About'
import { Container } from 'reactstrap'
import Skill from '../components/Skill/Skill'
import Services from '../components/Services/Services'
import Qualification from '../components/Qualification/Qualification'

function HomePages() {
  return (
    <Container>
    <Fragment>
    <Home/>
    <About />
    <Skill />
    <Services />
    </Fragment>
    <Qualification />
    </Container>
  )
}

export default HomePages