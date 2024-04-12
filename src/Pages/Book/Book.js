import React from 'react'
import "./Book.css"
import { Col, Container, Row } from 'react-bootstrap'
import SettingIcon from "../../IMG/Settings.png"
import Location from "../../IMG/Location.png"
import Mobile from "../../IMG/mobile.png"
import Women from "../../IMG/women.png"
import Checked from "../../IMG/Checked.png"
import Chat from "../../IMG/Chat.png"
const Book = () => {
    return (
        <div className='book mt-5 mb-5'>
            <Container className='text-center mt-2'>
                <Row>
                    
                        <Col lg="6" md="6" xs="12" sm="12">
                            <div className="selectform">
                        <form >
                            
                            <div className='form-control'>
                            <h2 className='text-center mt-3'>Book Appointment</h2>
                            <select>
                                    <option>Select Department</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                </select>
                                <select>
                                    <option>Select Department</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                </select>
                                <input placeholder='Your Name' type='text' />
                                <input placeholder='Phone Numbers' type='text'/>
                                <input  type='date'/>
                                    
                                <button >Appointment Now</button>
                                </div>

                        </form>
                        </div>
                        </Col>
                    

                    
                    <Col lg="6" md="6" xs="12" sm="12">
                        <div className='appointment-thumb mt-5'>
                            <div className='mobile-img'>
                                <img alt='' src={Mobile}/>
                                </div>
                                <div className='img-groub'>
                                    <img alt='' src={Women} className='women'/>
                                    <div className='iconsdiv'>
                                        <img alt='' src={SettingIcon} className='img1'/>
                                        <img alt='' src={Location} className='img2'/>
                                        <img alt='' src={Checked} className='img3'/>
                                        <img alt='' src={Chat} className='img4'/>
                                    </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Book
