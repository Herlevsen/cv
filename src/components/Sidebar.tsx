import * as React from 'react'
import styled from '@emotion/styled'
import { mainColor } from '../variables'
import { contactInfoItems, languages, softwareToolsAndFrameworks, spokenLanguages, driverLicenses } from '../data'
import Spacer, { Axis, Size } from './Spacer'
import ContactInfoLi from './ContactInfoLi'
import SidebarHeading from './SidebarHeading'
const profilePicturePath = require('../assets/img/profilepicture.jpg')

export const Sidebar: React.SFC = () => (
  <StyledAside>
    <section>
      <img src={profilePicturePath} />
    </section>
    <ContentContainer>
      <section>
        <SidebarHeading heading="Contact" icon="fa-user-circle-o" />
        <Spacer axis={Axis.Vertical} size={Size.Small} />
        <ul>{contactInfoItems.map(ContactInfoLi)}</ul>
      </section>
      <Spacer axis={Axis.Vertical} size={Size.Medium} />
      <section>
        <WebOnlyMessage>Hover over any of the items below, for an elaboration.</WebOnlyMessage>
        <PrintOnlyMessage>Visit my online resume at herlevsen.github.io for more details</PrintOnlyMessage>
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
  listItems: Array<[string, string]>
}

const SidebarSection: React.SFC<SidebarSectionProps> = props => (
  <section>
    <SidebarHeading heading={props.heading} icon={props.iconName} />
    <Spacer axis={Axis.Vertical} size={Size.Small} />
    <InfoItemList>
      {props.listItems.map(([item, description]) => (
        <li title={description}>{item}</li>
      ))}
    </InfoItemList>
  </section>
)

const InfoItemList = styled.ul({
  listStyle: 'none',
})

const PrintOnlyMessage = styled.p({
  display: 'none',
  margin: 0,
  '@media print': {
    display: 'block',
  },
})

const WebOnlyMessage = styled.p({
  margin: 0,
  '@media print': {
    display: 'none',
  },
})
