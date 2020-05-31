import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import './Technology.css'

const Technology = () => {
    return (
        <div className="full-back">
            <ReactBootstrap.Container>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col className="colomn">
                        <ReactBootstrap.Image style={{ width: '50%', height: '30%' }} src="/images/backend.png" className="img-responsible" />
                        <h5>Backend</h5>
                        <ul>
                            <li>C</li>
                            <li>PHP</li>
                            <li>JavaScript</li>
                        </ul>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col className="colomn">
                        <ReactBootstrap.Image style={{ width: '50%', height: '30%' }} src="/images/frontend.png" className="img-responsible" />
                        <h5>Frontend</h5>
                        <ul>
                            <li>ReactJS</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>CakePHP</li>
                        </ul>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col className="colomn">
                        <ReactBootstrap.Image style={{ width: '50%', height: '30%' }} src="/images/database.png" className="img-responsible" />
                        <h5>Database</h5>
                        <ul>
                            <li>MySql</li>
                            <li>Oracle</li>
                            <li>PhpMyadmin</li>
                        </ul>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col className="colomn">
                        <ReactBootstrap.Image style={{ width: '50%', height: '30%' }} src="/images/deployment.png" className="img-responsible" />
                        <h5>Deployment</h5>
                        <ul>
                            <li>Docker</li>
                            <li>Github</li>
                        </ul>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col className="colomn">
                        <ReactBootstrap.Image style={{ width: '50%', height: '30%' }} src="/images/processes.jpg" className="img-responsible" />
                        <h5>Processes</h5>
                        <ul>
                            <li>Agile</li>
                            <li>Scrum</li>
                            <li>Kanban</li>
                        </ul>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </div>
    )
}

export default Technology;