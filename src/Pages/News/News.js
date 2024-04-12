import React from 'react'
import "./News.css"
import { Col, Container, Row } from 'react-bootstrap'
import New1 from "../../IMG/news.jpg"
import New2 from "../../IMG/news1.jpg"
import New3 from "../../IMG/news2.jpg"
import download1 from "../../IMG/download1.jfif"
import download2 from "../../IMG/download2.jfif"
import download3 from "../../IMG/download3.jfif"
import DateIcon from "../../IMG/DateIcon.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const News = () => {
    
    return (
        <div className='news bg3'>
            <div className='heading text-center'>
                <h4>Latest News</h4>
                <h2>Our Latest News</h2>
            </div>
            
            <Container className='texe-center'>
                <Row>
                    <Col md="4" lg="4">
                        
                        <div className='box'>
                            <img alt='' src={New1}/>
                            <ul className=' mt-3'>
                                <li className=''>
                                    <a>
                                        <img alt=''  className='mt-2 me-2 ' src={download1} style={{height:"30px",width:"30px",borderRadius:"50%"}}/>
                                    Kalina Molika</a>
                                </li>
                                <li  className='mt-1'>
                                <img alt='' src={DateIcon} className='mt-2'/>
                                20 july 2021</li>
                            </ul>
                            <h5 >In this hospital there are special  surgeon</h5>
                            <button>Read More</button>
                        </div>
                    </Col>


                    <Col md="4" lg="4">
                    <div className='box '>
                        <img alt='' src={New2}/>
                            <ul className=' mt-3 '>
                                <li>
                                    <a><img alt=''  className='mt-2 me-2 ' src={download2} style={{height:"30px",width:"30px",borderRadius:"50%"}}/>
                                    Peter Packer</a>
                                </li>
                                <li  className='mt-1'>
                                <img alt='' src={DateIcon}className='mt-2'/>
                                20 july 2021</li>
                            </ul>
                            <h5>Can you get a diflucan prescription online?</h5>
                            <button>Read More</button>
                        </div>
                    </Col>

                <Col md="4" lg="4">
                    <div className='box'>
                        <img alt='' src={New3}/>
                            <ul className=' mt-3'>
                                <li>
                                <a ><img alt=''className='mt-2 me-2 ' src={download3} style={{height:"30px",width:"30px",borderRadius:"50%"}}/>
                                Sonar Moyna</a>
                                </li>
                                <li className='mt-1'>
                                <img alt='' src={DateIcon}className='mt-2'/>
                                20 july 2021</li>
                            </ul>
                            <h5>Why Is Skin Surgeon Considered Underrated</h5>
                            <button>Read More</button>
                        </div>
                    </Col>
                
                </Row>
            </Container>
            
        </div>
    )
}

export default News
