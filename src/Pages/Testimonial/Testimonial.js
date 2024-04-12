import React from 'react'
import "./Testimonial.css"
import {Container,Row,Col} from 'react-bootstrap';
import download1 from "../../IMG/download1.jfif"
import download2 from "../../IMG/download2.jfif"
import download3 from "../../IMG/download3.jfif"
import download4 from "../../IMG/download4.jfif"
import download5 from "../../IMG/download5.jfif"
import download6 from "../../IMG/download6.jfif"
import Circley from "../../IMG/Circley.png"

const Testimonial = () => {

    return (
        <div className='testimonials'>
            <div className='heading text-center'>
                <h4>Testimonial</h4>
                <h2>See What Are The Patients <br/> Saying About us</h2>
            </div>
            <Container className='w-100'>
                <Row>
                    <Col md="6" lg="6">
                        <div className='imgs position-relative'>
                        <img alt='' src={Circley} className='backgroundimg' />
                        
                            <ul className='d-flex'>
                                <li>
                                <img alt='' src={download1} style={{height:"65px",width:"65px",borderRadius:"50%"}}/>
                                </li>

                                <li>
                                <img alt='' src={download2} style={{height:"65px",width:"65px",borderRadius:"50%"}}/>
                                </li>

                                <li>
                                <img alt='' src={download3} style={{height:"65px",width:"65px",borderRadius:"50%"}}/>
                                </li>

                                <li>
                                <img alt='' src={download4} style={{height:"65px",width:"65px",borderRadius:"50%"}}/>
                                </li>

                                <li>
                                <img alt='' src={download5} style={{height:"65px",width:"65px",borderRadius:"50%"}}/>
                                </li>

                                <li>
                                <img alt='' src={download6} style={{height:"65px",width:"65px",borderRadius:"50%"}}/>
                                </li>
                            </ul>
                        </div>
                    </Col>




                    <Col md="6" lg="6">
                            
                            <div className='para'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                            <span>John Deo</span>
                            <span>PaTIENT</span>
                            </div>


                    </Col>
                </Row>
            </Container>
        
        </div>
    )
}

export default Testimonial
