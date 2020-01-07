import * as React from 'react'
import styled from '@emotion/styled'
import { H1, H2 } from './Headings'
import WorkExperience from './WorkExperience'
import Spacer, { Axis, Size } from './Spacer'
import { mainColor } from '../variables'

export const Content = () => (
  <Container>
    <div className="pad">
      <H1>JENS HERLEVSEN</H1>
      <Spacer axis={Axis.Vertical} size={Size.Tiny} />
      <SubHeading>Software Engineer from Copenhagen, Denmark</SubHeading>
      <Spacer axis={Axis.Vertical} size={Size.Medium} />
      <StyledIntroSection>
        <p>My name is Jens Ahlsten Herlevsen and I'm a software engineer from Copehagen, Denmark.</p>
        <p>I started programming on my own, in 2012. Since then i've also gotten a computer science degree.</p>
        <p>I am a full stack developer, but I find most joy in backend development.</p>
        <p>
          I am proficient in multiple languages, and used to working with industry standard tools like Git and Docker,
          and practices like software testing.
        </p>
        <p>As an employee, I see my strengths as:</p>
        <ul>
          <li>
            Great knowledge about the whole stack, from the frontend, to the backend and to the infrastructure around
            it.
          </li>
          <li>Hard working and curios.</li>
          <li>Honest.</li>
          <li>Team player.</li>
          <li>I prefer to do things the "right way", but also be pragmatic.</li>
        </ul>
      </StyledIntroSection>
      <Spacer axis={Axis.Vertical} size={Size.Medium} />
      <ContentSection heading="Work experience">
        <StyledWorkExperienceList>
          {[
            [
              'WelcomeBob',
              'Feb 2019 - Dec 2019',
              'WelcomeBob is a startup that makes smart door phones, that calls your smart phone. At WelcomeBob I worked on both the backend and the frontend applications and made a lot of progress on the product, in a short time.',
            ],
            [
              'Cloudhuset',
              'Feb 2017 - Jan 2019',
              'Cloudhuset is Denmarks best and most experienced Zendesk partner. At Cloudhuset I developed apps, integrations, reports, knowledgebases, etc. for many, big and small, danish and international customers.',
            ],
            [
              'Musik I Lejet',
              'Apr 2016 - Aug 2018',
              'Musik I Lejet is a very popular festival in Tisvildeleje. I developed a CMS, where all content could be managed across their website and mobile app. I also was a part of developing their mobile app in React native.',
            ],
            [
              'Ageras',
              'Aug 2016 - Jan 2016',
              'I had my internship for my computer science degree at Ageras. I worked on both the backend REST API, and a SPA react application. After my internship I got a part-time job at Ageras.',
            ],
            [
              'Jey.dk',
              'Dec 2014 - Dec 2018',
              'Jey.dk was a little side-gig that i started with a friend. We implemented websites in CMS systems, made a couple of SPA web apps, and did some integrations.',
            ],
            [
              'Danish Royal Lifeguards',
              '2010 - 2012',
              'Served as a royal life guard, and was stationed in Afghanistan for 6 months',
            ],
          ].map(workExperienceLiWrapper)}
        </StyledWorkExperienceList>
      </ContentSection>

      <ContentSection heading="Education">
        <StyledWorkExperienceList>
          {[
            ['Computer Science', '2014-2016', 'Copenhagen School of Design and Technology'],
            ['High School (HF)', '2007-2019', 'Frederiksborg Gymnasium og HF'],
          ].map(workExperienceLiWrapper)}
        </StyledWorkExperienceList>
      </ContentSection>
    </div>
  </Container>
)

const StyledIntroSection = styled.div({
  p: {
    marginBottom: 15,
  },
})

const StyledWorkExperienceList = styled.ul({ listStyle: 'none' })
const StyledWorkExperienceLi = styled.li({ marginBottom: '10px' })
const workExperienceLiWrapper = ([name, period, description]: string[]) => (
  <StyledWorkExperienceLi key={name}>
    <WorkExperience name={name} period={period} description={description} />
  </StyledWorkExperienceLi>
)

interface ContentSectionProps {
  heading: string
  children: React.ReactNode
}

const ContentSection: React.SFC<ContentSectionProps> = props => (
  <section>
    <Beam>
      <H2>{props.heading}</H2>
    </Beam>
    <ContentSectionContainer>{props.children}</ContentSectionContainer>
  </section>
)

const ContentSectionContainer = styled.section({
  padding: '45px 0 45px 0',
})

const Beam = styled.div({
  marginLeft: '-45px',
  padding: '10px 20px 10px 40px',
  background: `linear-gradient(to right, ${mainColor}, #8ec2b0)`,
  color: 'white',
  display: 'inline-block',
})

const Container = styled.section({
  backgroundColor: 'white',
  padding: 45,
})

const SubHeading = styled.p({
  margin: 0,
  fontSize: 18,
})
