import * as React from 'react'
import styled from '@emotion/styled'
import { mainColor } from '../variables'
import { contactInfoItems, languages, softwareToolsAndFrameworks, spokenLanguages, driverLicenses } from '../data'
import Spacer, { Axis, Size } from './Spacer'
import ContactInfoLi from './ContactInfoLi'
import SidebarHeading from './SidebarHeading'
import { Manager, Reference, Popper } from 'react-popper'

const profilePicturePath = '/profilepicture.jpg'

export const Sidebar: React.SFC = () => {
  const [openItem, setOpenItem] = React.useState<string | null>(null)

  return (
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
          <PrintOnlyMessage>Visit my online resume at herlevsen.github.io/cv/ for more details</PrintOnlyMessage>
        </section>
        <Spacer axis={Axis.Vertical} size={Size.Medium} />
        <SidebarSection
          heading="Spoken languages"
          iconName="fa-comment"
          listItems={spokenLanguages}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
        <Spacer axis={Axis.Vertical} size={Size.Medium} />
        <SidebarSection
          heading="Languages"
          iconName="fa-code"
          listItems={languages}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
        <Spacer axis={Axis.Vertical} size={Size.Medium} />
        <SidebarSection
          heading="Software, Tools & Frameworks"
          iconName="fa-laptop"
          listItems={softwareToolsAndFrameworks}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
        <Spacer axis={Axis.Vertical} size={Size.Medium} />
        <SidebarSection
          heading="Driver licenses"
          iconName="fa-id-card-o"
          listItems={driverLicenses}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
      </ContentContainer>
    </StyledAside>
  )
}

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
  openItem: string | null
  setOpenItem: (item: string | null) => void
}

const SidebarSection: React.SFC<SidebarSectionProps> = props => {
  return (
    <section>
      <SidebarHeading heading={props.heading} icon={props.iconName} />
      <Spacer axis={Axis.Vertical} size={Size.Small} />
      <InfoItemList>
        {props.listItems.map(([item, description]) => (
          <Li
            item={item}
            description={description}
            isOpen={props.openItem === item}
            toggle={() => props.setOpenItem(props.openItem === item ? null : item)}
            key={item}
          />
        ))}
      </InfoItemList>
    </section>
  )
}

const Li: React.FC<{
  item: string
  description: string
  isOpen: boolean
  toggle: () => void
}> = props => {
  return (
    <li>
      <Manager>
        <Reference>
          {({ ref }) => (
            <div style={{ display: 'inline-block', cursor: 'pointer' }} ref={ref} onClick={props.toggle}>
              {props.item}
            </div>
          )}
        </Reference>
        <Popper placement="right">
          {({ ref, style, placement, arrowProps }) =>
            props.isOpen && (
              <div
                ref={ref}
                style={{
                  ...style,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  maxWidth: 300,
                  padding: '15px 20px 15px 15px',
                  fontSize: 14,
                  borderRadius: 4,
                  marginLeft: 10,
                }}
                data-placement={placement}
              >
                <CloseButton onClick={props.toggle} children="x" />
                {props.description}
                <Arrow ref={arrowProps.ref} style={arrowProps.style} data-placement={placement} />
              </div>
            )
          }
        </Popper>
      </Manager>
    </li>
  )
}

export const CloseButton = styled.div({
  lineHeight: 0,
  color: 'white',
  position: 'absolute',
  top: 10,
  right: 5,
  cursor: 'pointer',
  fontSize: 18,
  fontWeight: 400,
})

export const Arrow = styled.div(`
  position: absolute;
  left: 0;
  &::before {
    border-color: rgba(0, 0, 0, 0);
    border-right-color: rgba(0, 0, 0, 0.7);
    border-width: 7px;
    content: '';
    margin-left: -14px;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
`)

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
