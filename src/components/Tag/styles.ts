import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.beje};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-right: 8px;
  &::first-letter {
    text-transform: uppercase;
  }
`
