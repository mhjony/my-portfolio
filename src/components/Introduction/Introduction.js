import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

const Introduction = () => {
    return (
        <div style={{ margin: 'auto', padding: 'auto' }}>
            <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col className="align-middle text-justify" sm={6}>
                        <h5>Hey! My name is Mahmudul. I am a software developer and I'm currently studying computer programming at
                        Hive Helsinki. At Hive, the most important thing I have learned that is “learn how to learn“. At Hive,
                        we also value teamwork and colloaboration.</h5>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={6}>
                        <ReactBootStrap.Image src={process.env.PUBLIC_URL + '/images/introduction.jpeg'} rounded />
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        </div>
    )
}

export default Introduction;