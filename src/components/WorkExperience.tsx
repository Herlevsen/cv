import * as React from 'react'
import styled from '@emotion/styled'

export interface WorkExperienceProps {
  name: string
  period: string
  description: string
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ name, period, description }) => (
  <Container>
    <Line1>
      <Heading children={name} />
      <Period children={period} />
    </Line1>
    <Description children={description} />
  </Container>
)

const Heading = styled.h3({
  fontWeight: 400,
})

const Line1 = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  color: '#333',
})

const Description = styled.div({})

const Period = styled.span({
  fontFamily: "'Nanum Gothic Coding', monospace;",
  textTransform: 'uppercase',
  fontSize: '13px',
})

const Container = styled.div({
  backgroundColor: '#eee',
  padding: '5px 10px',
})

export default WorkExperience
