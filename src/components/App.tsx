import * as React from 'react'
import { Sidebar } from './Sidebar'
import styled from 'react-emotion'
import { Content } from './Content'
import { injectGlobalStyles } from '../globalStyles'

injectGlobalStyles()

export interface AppProps {
}

export default class App extends React.Component<AppProps> {
    public render() {
        return (
            <StyledMain>
                <StyledContainer>
                    <Sidebar />
                    <Content />
                </StyledContainer>
            </StyledMain>
        )
    }
}

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
