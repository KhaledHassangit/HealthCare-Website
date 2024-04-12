import React from 'react'
import "./Work.css"
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

const Work = () => {
    return (
        <div className='work mb-5'>
            <Container>
                <Row>
                    <h4 className='mt-2'>Working Process</h4>
                    <h2 className='banner-heading'>How we works?</h2>
                </Row>
                <Row >
                    <Col md="4" lg="4">
                        <div className='holder'>
                        <h1>01</h1>
                        <h4>Make Appointmnet</h4>
                        <p>It is a long established fact that a reader will
                            be distracted by the readable content of.</p>
                            <button>Veiw More</button>
                        </div>
                    </Col>

                    <Col md="4" lg="4">
                    <div className='holder oranagy mt-5'>
                        <h1>02</h1>
                        <h4>Take Treatment</h4>
                        <p>It is a long established fact that a reader will
                            be distracted by the readable content of.</p>
                            <button>Veiw More</button>
                        </div>
                    </Col>

                    <Col md="4" lg="4">
                    <div className='holder '>
                        <h1>03</h1>
                        <h4>Registration</h4>
                        <p>It is a long established fact that a reader will be 
                            distracted by the readable content of.</p>
                            <button >Veiw More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Work
