import * as React from 'react'
import styled from 'react-emotion'
import { H1, H2 } from './Headings'

const musikILejetImg = require('../assets/img/musikilejet.jpg')

export const Content = () => (
    <Container>
        <div className="pad">
            <H1><span>JENS</span> HERLEVSEN</H1>
            <div className="caption">Full Stack Web Developer</div>

            <section className="intro">
                <p>Hi there! My name is Jens Ahlsten Herlevsen and I'm a full stack web developer from Copehagen, Denmark.</p>
                <p>
                    I study Computer Science at KEA, but actually consider most of my knowledge self-taught.
                    My preferred programming language for the web is PHP, and I love the PHP community and the large eco-system of open source libraries available for it.
                    At your left, you will find a lot of the software, tools, languages, frameworks and so on, that I've touched upon in the past years.
                    Even though I consider myself a full stack developer, my passion is with backend development.
                </p>
                <p>Right now I'm looking for an internship at a Copenhagen based Company, that does web development in an agile way. If I might be of interest to your company, please do not hesitate to contact me.</p>
            </section>

            <ContentSection heading="Projects">
                <ul>
                    <li>
                        <a href="http://musikilejet.dk" target="_blank">
                            <img src={musikILejetImg} />
                        </a>
                        <div className="description">
                            I am on board the biggest music festival in North Zealand, leading the development and maintaining the website musikilejet.dk. The site is backed by the PHP framework Laravel.
                        </div>
                    </li>
                </ul>
            </ContentSection>

            <ContentSection heading="Related work experience">
                <ul>
                    <li>
                        <h3>Spotly IVS <span>2017-NOW</span></h3>
                        <div>CTO</div>
                    </li>
                    <li>
                        <h3>Cloudhuset <span className="year">2017-NOW</span></h3>
                        <div className="job">Backend Developer</div>
                    </li>
                    <li>
                        <h3>Ageras A/S <span className="year">2016-2017</span></h3>
                        <div className="job">Backend &amp; frontend development</div>
                    </li>
                    <li>
                        <h3>Jey.dk I/S <span className="year">2014-NOW</span></h3>
                        <div className="job">Owner &amp; developer</div>
                    </li>
                </ul>
            </ContentSection>

            <ContentSection heading="Relevant education">
                <ul>
                    <li>
                        <h3>Computer Science <span className="year">2014-2016</span></h3>
                        <div className="school">Copenhagen School of Design and Technology</div>
                    </li>
                    <li>
                        <h3>High School (HF) <span className="year">2007-2009</span></h3>
                        <div className="school">Frederiksborg Gymnasium og HF</div>
                    </li>
                </ul>
            </ContentSection>

            <ContentSection heading="Other information">
                <ul>
                    <li>Joined the Danish Royal Life Guards <span className="year">2010</span></li>
                    <li>Stationed in Afghanistan for 6 months <span className="year">2012</span></li>
                    <li>Founded <a href="http://jey.dk">jey.dk</a> <span className="year">2014</span></li>
                    <li>I can drive a car, truck and a motorcycle legally <span className="year">ANY DAY</span></li>
                    <li>I like to attend relevant IT events <span className="year">WHENEVER</span></li>
                </ul>
            </ContentSection>
        </div>
    </Container>
)

interface ContentSectionProps {
    heading: string
    children: React.ReactNode
}

const ContentSection: React.SFC<ContentSectionProps> = props => (
    <section>
        <Beam><H2>{props.heading}</H2></Beam>
        <ContentSectionContainer>
            {props.children}
        </ContentSectionContainer>
    </section>
)

const ContentSectionContainer = styled.section({
    padding: '45px 0 45px 0',
})

const Beam = styled.div({
    marginLeft: '-45px',
    padding: '10px 20px 10px 40px',
    background: 'linear-gradient(to right, #AFD4C7, #8ec2b0)',
    color: 'white',
    display: 'inline-block',
})

const Container = styled.section({
    backgroundColor: 'white',
    padding: 45,
})
