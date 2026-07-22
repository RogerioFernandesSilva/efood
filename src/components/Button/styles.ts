import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.darkBeige};
  color: ${colors.pink};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  width: 100%;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.beige};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
