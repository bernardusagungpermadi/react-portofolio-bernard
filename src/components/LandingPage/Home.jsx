import React from 'react'
import { Container } from 'reactstrap'
import Social from './Social'
import Data from './Data'
import './landing.css'
import ScrollDown from './ScrollDown'

function Home() {
  return (
    <section className="home section" id="home">
        <Container className='home_container grid'>
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>

            <ScrollDown />
        </Container>
    </section>
  )
}

export default Home