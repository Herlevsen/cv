import * as React from 'react'
import { Sidebar } from './Sidebar'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { Content } from './Content'
import { globalStyles } from '../globalStyles'

const App: React.FC = () => (
  <>
    <Global styles={globalStyles} />
    <StyledMain>
      <StyledContainer>
        <Sidebar />
        <Content />
      </StyledContainer>
    </StyledMain>
    )
  </>
)

export default App

const StyledMain = styled.div({
  minHeight: '100%',
  maxWidth: 1100,
  margin: '0 auto',
})

const StyledContainer = styled.div({
  display: 'flex',
  '> *:nth-child(1)': {
    width: '40%',
  },
  '> *:nth-child(2)': {
    width: '60%',
  },
})
