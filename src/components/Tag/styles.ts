import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.pink};
  color: ${colors.beige};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-right: 8px;
  &::first-letter {
    text-transform: uppercase;
  }
`
