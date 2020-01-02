import * as React from 'react'
import styled from '@emotion/styled'
import { mainColor } from '../variables'
import { H2 } from './Headings'
import { contactInfoItems, languages, softwareToolsAndFrameworks, spokenLanguages, driverLicenses } from '../data'
import Spacer, { Axis, Size } from './Spacer'
const profilePicturePath = require('../assets/img/profilepicture.jpg')

export const Sidebar: React.SFC = () => (
  <StyledAside>
    <section>
      <img src={profilePicturePath} />
    </section>
    <ContentContainer>
      <section>
        <H2>
          Contact <i className="fa fa-fax"></i>
        </H2>
        <Spacer axis={Axis.Vertical} size={Size.Small} />
        <ul>
          {contactInfoItems.map(item => (
            <li>
              <i className={`fa ${item.icon}`}></i> {item.link ? <a href={item.link}>{item.text}</a> : item.text}
            </li>
          ))}
        </ul>
      </section>
      <Spacer axis={Axis.Vertical} size={Size.Medium} />
      <SidebarSection heading="Spoken languages" iconName="fa-comment" listItems={spokenLanguages} />
      <Spacer axis={Axis.Vertical} size={Size.Medium} />
      <SidebarSection heading="Languages" iconName="fa-code" listItems={languages} />
      <Spacer axis={Axis.Vertical} size={Size.Medium} />
      <SidebarSection
        heading="Software, Tools & Frameworks"
        iconName="fa-laptop"
        listItems={softwareToolsAndFrameworks}
      />
      <Spacer axis={Axis.Vertical} size={Size.Medium} />
      <SidebarSection heading="Driver licenses" iconName="fa-id-card-o" listItems={driverLicenses} />
    </ContentContainer>
  </StyledAside>
)

const StyledAside = styled.div({
  backgroundColor: mainColor,
  color: 'white',
})

const ContentContainer = styled.div({
  padding: 45,
})

interface SidebarSectionProps {
  heading: string
  iconName: string
  listItems: string[]
}

const SidebarSection: React.SFC<SidebarSectionProps> = props => (
  <section>
    <H2>
      {props.heading} <i className={`fa ${props.iconName}`}></i>
    </H2>
    <Spacer axis={Axis.Vertical} size={Size.Small} />
    <ul>
      {props.listItems.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </section>
)
