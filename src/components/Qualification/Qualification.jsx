import React from 'react'
import './qualification.css'

function Qualification() {
  return (
    <section className="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Ponsel Journey</span>

        <div className="qualification__container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active">
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    {" "} Education
                </div>

                <div className="qualification__button">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    {" "} Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Informatika
                                <span className="qualification__subtitle">UTI</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019-2023
                                </div>
                            </h3>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Informatika
                                <span className="qualification__subtitle">UTI</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019-2023
                                </div>
                            </h3>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification