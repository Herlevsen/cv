import * as React from 'react'
import styled from '@emotion/styled'
import { H2 } from './Headings'

const SidebarHeading: React.FC<{ heading: string; icon: string }> = props => (
  <H2>
    {props.heading}
    <IconWrapper>
      <i className={`fa ${props.icon}`}></i>
    </IconWrapper>
  </H2>
)

export default SidebarHeading

const IconWrapper = styled.div({
  display: 'inline-block',
  marginLeft: 15,
})
