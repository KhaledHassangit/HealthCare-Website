import React from 'react'
import "./Services.css"
import {Container,Row,Col} from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import First from "../../IMG/1.png"
import Second from "../../IMG/2.png"
import Third from "../../IMG/3.png"
import fourth from "../../IMG/4.png"
import fifth from "../../IMG/5.png"

const Services = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
        ,
    };

    return (
        <div className='services '>
            <Container>
                <Row >

                    <Col md="4" lg="4" >
                        <div className='infoDiv w-100'>
                            <h4>Services</h4>
                            <h2>We Cover A Big Variety Of Medical Services</h2>
                            <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                            <button>All Services</button>
                        </div>
                    </Col>

                    <Col md="8" lg="8" sm="12" xs="12">
                        <div className='boxesDiv w-100'>
                        <Slider {...settings}>

                                <div className='card '>
                                    <img  alt='' src={First}/>
                                    <h3>Diagnostics</h3>
                                    <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <button>Veiw More</button>
                                </div>
                                <div className='card'>
                                    <img  alt='' src={Second}/>
                                    <h3>Treatment</h3>
                                    <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <button>Veiw More</button>
                                </div>

                                <div className='card'>
                                    <img  alt='' src={Third}/>
                                    <h3>Surgery</h3>
                                    <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <button>Veiw More</button>
                                </div>

                                <div className='card'>
                                    <img  alt='' src={fourth}/>
                                    <h3>Vaccine</h3>
                                    <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                    <button>Veiw More</button>
                                </div>
                            

                            </Slider>
                        </div>
                    </Col>
                    
                    

                </Row>
            </Container>
        </div>
    )
}

export default Services
