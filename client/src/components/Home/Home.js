import React, { Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

const Home = () => {
    return (
        <Fragment>
            <Carousel>
                <Carousel.Item>
                    <img className="carousel-image" src="https://cdn.discordapp.com/attachments/1064388669248634911/1159752128143831211/anurag787303_man_wearing_headphone_looking_at_left_with_plain_g_12ff6cc5-6b62-46c5-b895-d19d39253c46.png?ex=65322a56&is=651fb556&hm=af5efbc6c36c64d66d889d68ff2c9b4e8953cb81c547ad3c0d200fd5c4c4cbc0&" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" src="https://cdn.discordapp.com/attachments/1064388669248634911/1159752128143831211/anurag787303_man_wearing_headphone_looking_at_left_with_plain_g_12ff6cc5-6b62-46c5-b895-d19d39253c46.png?ex=65322a56&is=651fb556&hm=af5efbc6c36c64d66d889d68ff2c9b4e8953cb81c547ad3c0d200fd5c4c4cbc0&" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" src="https://cdn.discordapp.com/attachments/1064388669248634911/1159752128143831211/anurag787303_man_wearing_headphone_looking_at_left_with_plain_g_12ff6cc5-6b62-46c5-b895-d19d39253c46.png?ex=65322a56&is=651fb556&hm=af5efbc6c36c64d66d889d68ff2c9b4e8953cb81c547ad3c0d200fd5c4c4cbc0&" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Fragment >
    )
}

export default Home