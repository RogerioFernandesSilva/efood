import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
