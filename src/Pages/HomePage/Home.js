import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Doctor from "../../IMG/Doctor.png"
import "./Home.css"
import Plus from "../../IMG/plus.png"
import Squre from "../../IMG/squre.png"
import triangle from "../../IMG/triangle.png"
import BlueDot from "../../IMG/BlueDot.png"
import ZigZag from "../../IMG/ZigZag.png"

const Home = () => {
    return (
        <header className='landing bg'>
            <Container>
                <Row className='mt-5'>
                    <Col md="6" lg="6" sm="12" xs="12">
                        <div className='textdiv position-relative '>
                            <h5>We Provide All Health Care Solution</h5>
                            <h2>Protect Your Health And Take Care To Of Your Health</h2>
                            <button>Read More</button>
                            <img alt='' className='BlueDot' src={BlueDot}/>
                            <img alt='' className='plus' src={Plus}/>
                            <img alt='' className='triangle' src={triangle}/>
                        </div>
                    </Col>

                    <Col  md="6" lg="6" sm="12" xs="12  ">
                        <div className='imgdiv  position-relative'>
                            <img alt='' src={Doctor} />
                            <img alt='' className='squre' src={Squre}/>
                            <img alt='' className='ZigZag' src={ZigZag}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Home
