import { styled } from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.beje};
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  width: 100%;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.beje};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
