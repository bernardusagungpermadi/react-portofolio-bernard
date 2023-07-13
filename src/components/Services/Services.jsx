import React, { useState } from 'react'
import "./services.css"

function Services() {

    const [toggleState, setToggleState] = useState(0);
    const handleClickToogle = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>
            <div className='services__main'>

                <div className="services__container">
                    <div className="services__content">
                        <div>
                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">
                                UI/UX <br /> Designer
                            </h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClickToogle(1)}>
                            View More{" "} <i className='uil uil-arrow-right services__button-icon'></i></span>

                        <div className={toggleState=== 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={()=> handleClickToogle(0)} className='uil uil-times services__modal-close'></i>

                                <h3 className="services__modal-title">
                                    UI/UX <br /> Designer
                                </h3>
                                <p className='services__modal-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tempora ipsum doloribus consectetur voluptates earum voluptatibus quas facere est libero?</p>

                                <ul className="services__modal-services">
                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I Develop the User Interface.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            Web Page Development.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I Create UI element interaction.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            Build your design mockups of product for companies.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services__container">
                    <div className="services__content">
                        <div>
                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">
                                Frontend <br /> Developer
                            </h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClickToogle(1)}>
                            View More{" "}
                            <i className='uil uil-arrow-right services__button-icon'></i></span>

                        <div className={toggleState=== 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={()=> handleClickToogle(0)} className='uil uil-times services__modal-close'></i>

                                <h3 className="services__modal-title">
                                    Frontend <br /> Developer
                                </h3>
                                <p className='services__modal-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tempora ipsum doloribus consectetur voluptates earum voluptatibus quas facere est libero?</p>

                                <ul className="services__modal-services">
                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I Develop the User Interface.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            Web Page Development.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I Create UI element interaction.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            Build your design mockups of product for companies.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services__container">
                    <div className="services__content">
                        <div>
                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">
                                Backend <br /> Developer
                            </h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClickToogle(1)}>
                            View More{""}
                            <i className='uil uil-arrow-right services__button-icon'></i></span>

                        <div className={toggleState=== 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={()=> handleClickToogle(0)} className='uil uil-times services__modal-close'></i>

                                <h3 className="services__modal-title">
                                    Backend <br /> Developer
                                </h3>
                                <p className="services__modal-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt tempora ipsum doloribus consectetur voluptates earum voluptatibus quas facere est libero?</p>

                                <ul className="services__modal-services">
                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I Develop the User Interface.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            Web Page Development.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I Create UI element interaction.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className='uil uil-check-circle services__modal-icon'></i>
                                        <p className="services__modal-info">
                                            Build your design mockups of product for companies.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services