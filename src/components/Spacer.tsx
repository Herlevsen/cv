import * as React from 'react'
import styled from '@emotion/styled'

interface IProps {
  axis: Axis
  size: number
}

export enum Size {
  Tiny = 8,
  Small = 16,
  Base = 24,
  Medium = 32,
  Large = 48,
  Huge = 64,
}

export enum Axis {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

const Spacer = (props: IProps) => {
  const { axis, size } = props

  return (
    <StyledSpacer
      style={{
        width: axis === Axis.Horizontal ? size : undefined,
        height: axis === Axis.Vertical ? size : undefined,
      }}
    />
  )
}

const StyledSpacer = styled.div({
  width: '100%',
})

export default Spacer
