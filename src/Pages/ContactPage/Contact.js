import {   faEnvelope, faGlobe, faHeart, faHome, faMap, } from  '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Contact.css"
import PhoneIcon from "../../IMG/phoneicon.png"
import LocationIcon from "../../IMG/Locationicon.png"
import EmailIcon from "../../IMG/mailicon.png"
import {useState} from "react"


const Contact = () => {
    const [name, setName] = useState("")


    const ChangeName = (event)=>{
        setName(event.target.value)
    }
    const formHandle=(event)=>{
        event.preventDefault()
        console.log(name)
        if(name.length == ""){
            alert("Not Empty")
            return;
        }
    }



    return (
        <div className='Contact-us bg'>

            <Container>
                <Row className='text-center'>
                    <Col md="12" lg="12">
                        <h1 className='banner-heading'>Contact Us</h1>
                    </Col>
                </Row>

                <Row className='text-center mt-2'>
                    <Col md="12" lg="12">
                        <Link to="/">
                        <ul className='breadcrumb-row '>
                            
                            <li >
                                <Link to="/" className='me-2' style={{textDecoration:"none",color:"#fff",}}>
                                    <FontAwesomeIcon className='homeicon' icon={faHome}/>
                                </Link>
                                Home  /  Contact Us
                            </li>
                        </ul>
                        </Link>
                    </Col>
                </Row>

                <Row className='contact contact-wraper'>
                    <Col md="6" lg="6">
                        <form onSubmit={formHandle}>
                            <div className='form-control'>
                                <input placeholder='Your Name' type='text' value={name} onChange={(ChangeName)}/>
                                <input placeholder='Email' type='email'/>
                                <input placeholder='Phone Numbers' type='text'/>
                                <select>
                                    <option>Select Department</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                </select>
                                <textarea placeholder='Type Massage'/>
                                <button >Submit</button>
                            </div>
                        </form>
                        </Col>
                    <Col md="6" lg="6">
                        <div className='side-info'>
                            <div className='over-lay'>
                                <h3>Contact Us For Any <br/> Informations</h3>
                                <li><FontAwesomeIcon icon={faMap}/>Location</li>
                                <hr/>
                                <p>2005 Stokes Isle Apt. 896, Venaville <br/>  10010, USA</p>
                                <li><FontAwesomeIcon icon={faEnvelope}/>Email & Phone</li>
                                <hr/>
                                <div className='email'>info@yourdomain.com <br/> (+68) 120034509</div>
                                <li><FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
                                <hr/>
                                <ul className='social-icons d-flex'>
                                    <li><FontAwesomeIcon icon={faHeart}/></li>
                                    <li><FontAwesomeIcon icon={faHeart}/></li>
                                    <li><FontAwesomeIcon icon={faHeart}/></li>
                            </ul>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='text-left '>
                    <Col lg="4" md="4"> 
                        <div className='info-box first'>
                            <div className='img'>
                                <img alt='' src={PhoneIcon} />
                            </div>
                            <div className='text'>
                                <h5>Contact Number</h5>
                                <p>+001 123 456 790 <br/> +002 3424 44 00</p>
                                
                            </div>
                        </div>
                    </Col>

                    <Col lg="4" md="4">
                    <div className='info-box second'>
                        <div div className='img'>
                                <img alt='' src={LocationIcon} />
                            </div>
                            <div className='text'>
                                <h5>Email Address</h5>
                                <p>info@yourdomain.com <br/> example@support.com</p>
                                
                            </div>
                        </div>
                    </Col>

                    <Col lg="4" md="4">
                    <div className='info-box third'>
                        <div div className='img'>
                                <img alt='' src={EmailIcon} />
                            </div>
                            <div className='text'>
                                <h5>Address</h5>
                                <p>2005 Stokes Isle Apt. 896, Venaville <br/> 10010, USA</p>
                                
                            </div>
                    </div>
                        

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Contact
