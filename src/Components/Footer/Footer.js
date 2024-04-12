import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from "../../IMG/Logo.png";
import FooterIcon from "../../IMG/FooterIcon.png";
import SocialIcons from "../../IMG/SocialIcons.png";
import  "./Footer.css"
const Footer = () => {
    return (
        <div className='footer bg2 '>
            <Container className='texe-center '>
                <Row>
                    <Col  md="6" lg="3" sm="12">
                        <div className='logo'>
                            <img alt='' src={Logo}/>
                        </div>
                        <div className='infoContact'>
                            <p>
                            Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
                            </p>
                            <div className='infos d-flex'>
                                <div className='icon '>
                                <img src={FooterIcon} alt=''/>
                                </div>
                                <div className='Numbers'>
                                <span className=''>Contact Us</span>
                                <h4 className='phonenumber'>+01 123 456 7890</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col  md="6" lg="3" sm="6" xs="6">
                        <div className='Links position-relative '>
                        <h3>Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Booking</li>
                            <li>Faq's</li>
                            <li>Blogs</li>
                            <li>Our Team</li>
                        </ul>
                        </div>
                    </Col>

                    <Col  md="6" lg="3" sm="6"  xs="6">
                    <div className='Links2 position-relative'>
                        <h3>Our Service</h3>
                        <ul>
                            <li>Dental Care</li>
                            <li>Cardiac Clinic</li>
                            <li>Massege Therapy</li>
                            <li>Cardiology</li>
                            <li>Precise Diagnosis</li>
                            <li>Abmbulance Services</li>
                        </ul>
                        </div>
                    </Col>

                    <Col  md="6" lg="3" sm="12" >
                        <div className='subscribe d-flex flex-column position-relative '>
                            <h3>Subscribe</h3>
                            <div>
                                <input className='text' placeholder="Email Address"/>
                                <button className='d-block'>Subscribe Now</button>
                                <img alt='' src={SocialIcons}/>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='text-center copy-right'>
                    <hr/>
                    <div>Copyright © 2023 Design & Developed by <span className='d-inline-block'>ThemeTrades</span></div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
