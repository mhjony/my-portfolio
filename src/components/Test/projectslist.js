import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './Projects.css'

const Projects = () => {
    return (
        <div className="container">
            <ReactBootStrap.Container style={{ marginTop: '5px', padding: '5px' }}>
                <ReactBootStrap.Row style={{ margin: '1%' }}>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Image src="/images/fillit_200x250.jpg" rounded className="Image" />
                        <ReactBootStrap.Figure.Caption className="text-justify">
                            It was a group project at Hive. I and ismelich created a program which takes a file as parameter
                            which contains list of tetriminos. Our program organized the tetriminos in a smallest square as possible.
                        <a href="https://github.com/mhjony/fillit"> FILLIT</a>
                        </ReactBootStrap.Figure.Caption>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Image src="/images/fdf_220x250.png" rounded className="Image" />
                        <ReactBootStrap.Figure.Caption className="text-justify">
                            FDF is our first graphical project on C programming language. In this project, I used Bresenham line drawing algorithm.
                            <a href="https://github.com/mhjony/fdf-final"> FDF</a>
                        </ReactBootStrap.Figure.Caption>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Image src="/images/libft_220x250.jpg" rounded className="Image" />
                        <ReactBootStrap.Figure.Caption className="text-justify">
                            In this project, I reproduced the behavior of 58 library functions those are widely used in c programming and other languages as well.
                            <a href="https://github.com/mhjony/fdf-final"> LIBFT</a>
                        </ReactBootStrap.Figure.Caption>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row style={{ margin: '1%' }}>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Image src="/images/docker_220x250.png" rounded className="Image" />
                        <ReactBootStrap.Figure.Caption className="text-justify">
                            In this project, I get to know about docker container. I built my own docker container.
                            <a href="https://github.com/mhjony/docker-1"> DOCKER</a>
                        </ReactBootStrap.Figure.Caption>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Image src="/images/campusQuiz_220x250.jpeg" rounded className="Image" />
                        <ReactBootStrap.Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </ReactBootStrap.Figure.Caption>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                        <ReactBootStrap.Image src="/images/ECHA_220x250.png" rounded className="Image" />
                        <ReactBootStrap.Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </ReactBootStrap.Figure.Caption>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container >
        </div >
    )
}

export default Projects;