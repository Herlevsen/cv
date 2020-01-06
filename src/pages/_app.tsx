import * as React from 'react'
import '../styles.css'

const Component: React.FC<any> = props => (
    <>
      <props.Component {...props.pageProps} />
    </>
)

export default Component