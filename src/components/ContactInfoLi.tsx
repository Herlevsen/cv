import * as React from 'react'
import styled from '@emotion/styled'
import { ContactInfo } from '../data'

const ContactInfoLi: React.FC<ContactInfo> = props => (
  <StyledLi>
    <IconWrapper>
      <i className={`fa ${props.icon}`}></i>
    </IconWrapper>
    {props.link ? <a href={props.link}>{props.text}</a> : props.text}
  </StyledLi>
)

export default ContactInfoLi

const StyledLi = styled.li({
  display: 'flex',
  lineHeight: 1.8,
})

const IconWrapper = styled.div({
  width: 30,
})
