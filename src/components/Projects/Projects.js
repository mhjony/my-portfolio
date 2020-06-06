import React from 'react'
import './Projects.css'
import * as ReactBootStrap from 'react-bootstrap'

const Projects = () => {
    return (
        <div style={{ margin: 'auto', padding: 'auto' }}>
            <hr />
            <p className="project-heading">Projects</p>
            <hr />
            <ReactBootStrap.Container>
                <ReactBootStrap.Row style={{ textAlign: 'center', margin: '1% 1%' }}>
                    <ReactBootStrap.Col md={4} sm={12}>
                        <ReactBootStrap.Card style={{ width: '80%' }}>
                            <ReactBootStrap.Card.Img variant="top" src="./images/fdf.gif" className="img-responsive" style={{ height: '12vw' }} />
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>FDF</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text>
                                    <p>A graphical project in C language. In this project, I used Breshenham line drawing algorithm.
                                        <a href="https://github.com/mhjony/fdf-final">FDF</a>
                                    </p>
                                </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col >
                    <ReactBootStrap.Col md={4} sm={12}>
                        <ReactBootStrap.Card style={{ width: '80%' }}>
                            <ReactBootStrap.Card.Img variant="top" src="/images/docker.gif" className="img-responsive" style={{ height: '12vw' }} />
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title style={{ fontSize: '1.6rem' }}>Docker</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text>
                                    <p className="docker-font-custom">In this project, I worked with docker basic commands and have built my own docker containers with Dockerfiles.
                                        <a href="https://github.com/mhjony/docker-1"> Docker</a>
                                    </p>
                                </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col >
                    <ReactBootStrap.Col md={4} sm={12}>
                        <ReactBootStrap.Card style={{ width: '80%' }}>
                            <ReactBootStrap.Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/TD2.gif'} className="img-responsive" style={{ height: '12vw' }} />
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>Fillit</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text>
                                    <p className="font-custom"><a href="https://github.com/iljaSL">iljaSL</a>  and I created a program which would take a file
                                    as parameter, which contains a list of Tetriminos and arranged them in order to
                                    create the smallest square possible.
                                    <a href="https://github.com/mhjony/fillit"> Fillit</a>
                                    </p>
                                </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col >
                </ReactBootStrap.Row>
                <ReactBootStrap.Row style={{ textAlign: 'center', margin: '1% 1%' }}>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Card style={{ width: '80%' }}>
                            <ReactBootStrap.Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/libft.gif'} className="img-responsive" style={{ height: '12vw' }} />
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>Libft</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text>
                                    <p>In this project, I reproduced the behavior of 58 library functions those are widely
                                        used in c programming and other languages as well.
                                    <a href="https://github.com/mhjony/libft"> Libft</a>
                                    </p>
                                </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Card style={{ width: '80%' }}>
                            <ReactBootStrap.Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/census.gif'} className="img-responsive" style={{ height: '12vw' }} />
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>Census</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text>
                                    <p className="font-custom">In ISL, Me and my team members had built an application which is called "Economic census 2013".
                                        It's a large-scale web application for government of Bangladesh that was used
                                        in a nationwide census. </p>
                                </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Card style={{ width: '80%' }}>
                            <ReactBootStrap.Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/campusQuiz.jpeg'} className="img-responsive" style={{ height: '12vw' }} />
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>Campus Quiz</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text>
                                    <p className="font-custom">As a course project, me and my team created a game
                                    application for those people who doesn't know much about University of Oulu. We were
                                    rewarded the first prize in that project work.
                                    <a href="https://github.com/mhjony/SWF2017"> Campus Quiz</a>
                                    </p>
                                </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        </div>

    )
}

export default Projects;
