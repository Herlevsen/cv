import * as React from 'react'
import Head from 'next/head'
import { Sidebar } from '../components/Sidebar'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { Content } from '../components/Content'
import { globalStyles } from '../globalStyles'

const Component: React.FC = () => (
  <>
    <Head>
      <title>Resume For Jens Ahlsten Herlevsen</title>
    </Head>
    <Global styles={globalStyles} />
    <StyledMain>
      <StyledContainer>
        <Sidebar />
        <Content />
      </StyledContainer>
    </StyledMain>
  </>
)

export default Component

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
