import React, { useEffect, useRef, useState } from 'react'
import { TweenMax, Power3, TimelineLite, TweenLite, Linear } from 'gsap'
import './Skills.css'
import * as ReactBootStrap from 'react-bootstrap'

const Skills = () => {
    let Skills = useRef(null);
    let php = useRef(null);
    let c = useRef(null);
    let mysql = useRef(null);
    let javascript = useRef(null);
    let reactjs = useRef(null);
    let docker = useRef(null);
    TweenLite.defaultEase = Linear.easeNone;
    var tl = new TimelineLite()


    const [state, setState] = useState(false);

    const handleExpandPhp = () => {
        TweenMax.to(php, .8, { width: 125, height: 125, ease: Power3.easeOut })
        setState(true);
    }

    const handleShrinkPhp = () => {
        TweenMax.to(php, .8, { width: 75, height: 75, ease: Power3.easeOut })
        setState(false);
    }

    const handleExpandC = () => {
        TweenMax.to(c, .8, { width: 125, height: 125, ease: Power3.easeOut })
        setState(true);
    }

    const handleShrinkC = () => {
        TweenMax.to(c, .8, { width: 75, height: 75, ease: Power3.easeOut })
        setState(false);
    }

    const handleExpandMysql = () => {
        TweenMax.to(mysql, .8, { width: 125, height: 125, ease: Power3.easeOut })
        setState(true);
    }

    const handleShrinkMysql = () => {
        TweenMax.to(mysql, .8, { width: 75, height: 75, ease: Power3.easeOut })
        setState(false);
    }

    const handleExpandJavascript = () => {
        TweenMax.to(javascript, .8, { x: 0, width: 125, height: 125, ease: Power3.easeOut })
        setState(true);
    }

    const handleShrinkJavascript = () => {
        TweenMax.to(javascript, .8, { x: 40, width: 85, height: 85, ease: Power3.easeOut, yoyo: true })
        setState(false);
    }

    const handleExpandReactjs = () => {
        TweenMax.to(reactjs, .8, { x: 0, width: 125, height: 125, ease: Power3.easeOut })
        setState(true);
    }

    const handleShrinkReactjs = () => {
        TweenMax.to(reactjs, .8, { x: 0, width: 85, height: 85, ease: Power3.easeOut, yoyo: true })
        setState(false);
    }

    const handleExpandDocker = () => {
        TweenMax.to(docker, .8, { x: 0, width: 125, height: 125, ease: Power3.easeOut })
        setState(true);
    }

    const handleShrinkDocker = () => {
        TweenMax.to(docker, .8, { x: 0, width: 85, height: 85, ease: Power3.easeOut, yoyo: true })
        setState(false);
    }

    useEffect(() => {
        TweenMax.to(Skills, 0, { css: { visibility: 'visible' } });
        TweenMax.from(php, .8, { opacity: 0, x: 40, ease: Power3.easeOut, yoyo: true })
        TweenMax.from(c, .8, { opacity: 0, x: 40, ease: Power3.easeOut, delay: .2, yoyo: true })
        TweenMax.from(mysql, .8, { opacity: 0, x: 40, ease: Power3.easeOut, delay: .4, yoyo: true })
        TweenMax.from(javascript, .8, { opacity: 0, x: 0, ease: Power3.easeOut, delay: .4, yoyo: true })
        TweenMax.from(docker, .8, { opacity: 0, x: 0, ease: Power3.easeOut, delay: .4, yoyo: true })
        tl.to(".javascript", 3.4, { x: 10, repeat: -1, yoyo: true })
            .to(".javascript", 1.0, { y: 10, repeat: -1, yoyo: true }, 0)

    }, [])

    return (
        <div
            ref={el => Skills = el}
            className="Skills">
            <ReactBootStrap.Container className="circle-container" style={{ textAlign: 'center', margin: 'auto' }}>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandPhp}
                        onMouseOut={handleShrinkPhp}
                        ref={el => php = el}
                        className="php circle">
                        <p>PHP</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandC}
                        onMouseOut={handleShrinkC}
                        ref={el => c = el}
                        className="c circle">
                        <p>C</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandMysql}
                        onMouseOut={handleShrinkMysql}
                        ref={el => mysql = el}
                        className="mysql circle">
                        <p>MySql</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandJavascript}
                        onMouseOut={handleShrinkJavascript}
                        ref={el => javascript = el}
                        className="javascript circle">
                        <p>JavaScript</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandReactjs}
                        onMouseOut={handleShrinkReactjs}
                        ref={el => reactjs = el}
                        className="reactjs circle">
                        <p>ReactJs</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="docker circle">
                        <p>Docker</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="html5 circle">
                        <p>HTML5</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="css circle">
                        <p>CSS3</p>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="cakephp circle">
                        <p>CakePhp</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="oracle circle">
                        <p>Oracle</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="macos circle">
                        <p>MacOS</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="linux circle">
                        <p>Linux</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="git circle">
                        <p>GitHub</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="agile circle">
                        <p>Agile</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="scrum circle">
                        <p>Scrum</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="kanban circle">
                        <p>Kanban</p>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="vscode circle">
                        <p>vsCode</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="vim circle">
                        <p>Vim</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="trello circle">
                        <p>Trello</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="trello circle">
                        <p>Slack</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="liferay circle">
                        <p>Liferay</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col
                        onMouseOver={handleExpandDocker}
                        onMouseOut={handleShrinkDocker}
                        ref={el => docker = el}
                        className="cms circle">
                        <p>CMS</p>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        </div >

    )
}

export default Skills;