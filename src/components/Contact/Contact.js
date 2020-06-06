import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <ReactBootstrap.Container>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col className="social">
                        <ul style={{ textAlign: 'left' }}>
                            <li><ReactBootstrap.Image style={{ width: '4%', height: '4%' }} src={process.env.PUBLIC_URL + '/images/linkedin.png'} /></li>
                            <li><ReactBootstrap.Image style={{ width: '4%', height: '4%' }} src={process.env.PUBLIC_URL + '/images/twitter.png'} /></li>
                            <li><ReactBootstrap.Image style={{ width: '4%', height: '4%' }} src={process.env.PUBLIC_URL + '/images/instagram.png'} /></li>
                        </ul>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col>
                        <p>Created By</p>
                        <p style={{ lineHeight: '0%' }}>Mahmudul Hasan</p>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </div>
    )
}

export default Contact;