import * as React from 'react'
import styled from '@emotion/styled'
import { ContactInfo } from '../data'

const ContactInfoLi: React.FC<ContactInfo> = props => (
  <StyledLi key={props.text} onlyOnPrint={props.onlyOnPrint || false}>
    <IconWrapper>
      <i className={`fa ${props.icon}`}></i>
    </IconWrapper>
    {props.link ? <a href={props.link}>{props.text}</a> : props.text}
  </StyledLi>
)

export default ContactInfoLi

const StyledLi = styled.li<{ onlyOnPrint: boolean }>(
  {
    lineHeight: 1.8,
  },
  props => ({
    display: props.onlyOnPrint ? 'none' : 'flex',
    '@media print': {
      display: 'flex',
    },
  })
)

const IconWrapper = styled.div({
  width: 30,
})
