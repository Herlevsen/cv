import * as React from 'react'
import styled from 'react-emotion'
import { mainColor } from '../variables'
import { H2 } from './Headings'
import { contactInfoItems, languages, frameworks, softwareAndTools } from '../data'
const profilePicturePath = require('../assets/img/profilepicture.jpg')

export const Sidebar: React.SFC = () => (
    <StyledAside>
        <section>
            <img src={profilePicturePath} />
        </section>
        <ContentContainer>
            <section>
                <H2>Contact <i className="fa fa-fax"></i></H2>
                <ul>
                    {contactInfoItems.map(item => (
                        <li>
                            <i className={`fa ${item.icon}`}></i>{' '}
                            {item.link ? <a href={item.link}>{item.text}</a> : item.text}
                        </li>
                    ))}
                </ul>
            </section>

            <SidebarSection
                heading="Languages"
                iconName="fa-code"
                listItems={languages}
            />

            <SidebarSection
                heading="Frameworks"
                iconName="fa-bolt"
                listItems={frameworks}
            />

            <SidebarSection
                heading="Software & Tools"
                iconName="fa-laptop"
                listItems={softwareAndTools}
            />
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

interface SidebarSection {
    heading: string
    iconName: string
    listItems: string[]
}

const SidebarSection: React.SFC<SidebarSection> = props => (
    <section>
        <H2>{props.heading} <i className={`fa ${props.iconName}`}></i></H2>
        <ul>{props.listItems.map(item => <li>{item}</li>)}</ul>
    </section>
)
