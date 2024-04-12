import React from 'react'
import "./AboutUs.css"
import { Col, Container, Row } from 'react-bootstrap'
import pic2 from "../../IMG/pic2.jpg"
import pic1 from "../../IMG/pic1.jpg"
import pic3 from "../../IMG/pic3.jpg"

const AboutUs = () => {
    return (
        <div className='about-us '>
            <Container>
                <Row className='mt-5 mb-5'>
                    
                    <Col md="8" lg="6" sm="12" xs="12">
                    <div className='about-area '>
                        <ul >
                            <li><img alt='' src={pic2} className='img1'/></li>
                            <li><img alt ="" src={pic1} className='img2'/></li>
                            <li><img alt='' src={pic3} className='img3'/></li>
                            <li><div className='exp '>20 <span>Year Experience</span></div></li>
                        </ul>
                    </div>  
                    </Col>



                    <Col md="6" lg="6" sm="12" xs="12">
                        <Row>
                            <div className='elements mt-3'>
                                <h4 className='mt-2'>About Us</h4>
                                <h2>The Great Place Of Medical Hospital Center</h2>
                                <p className='mb-5'>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                            </div>
                        </Row>

                        <Row>
                            <Col md="6" lg="6">
                                <div className='features-box box1'>
                                <img alt=''/>
                                <h5>Emergency Help</h5>
                                </div>
                            </Col>

                            <Col md="6" lg="6">
                            <div className='features-box box2'>
                                <img alt=''/>
                                <h5>Qualified Doctors</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" lg="6">
                            <div className='features-box box3'>
                                <img alt=''/>
                                <h5>Best Professionals</h5>
                                </div>
                            </Col>
                            <Col md="6" lg="6">
                            <div className='features-box box4'>
                                <img alt=''/>
                                <h5>Medical Treatment</h5>
                                </div>
                            </Col>
                        </Row>

                        <button className='readmore'>Reade More</button>
                    </Col>

                </Row>
            </Container>
        
        </div>
    )
}

export default AboutUs
