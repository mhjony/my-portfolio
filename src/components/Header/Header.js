import React from 'react'
import * as ReactBootstrap from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <ReactBootstrap.Jumbotron style={{
                backgroundImage: `url(/images/background_image.jpg)`,
                backgroundSize: 'cover'
            }}>
                <ReactBootstrap.Container>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col sm={4}>
                            <ReactBootstrap.Image src="/images/rsz_mahmudul.jpg" roundedCircle />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={8}>
                            <h1 style={{ color: 'white' }}>Mahmudul Hasan</h1>
                            <h4 style={{ color: 'white' }}>Software Developer</h4>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Container>
            </ReactBootstrap.Jumbotron>
        </div>
    )
}

export default Header;