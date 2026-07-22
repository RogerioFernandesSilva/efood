import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 32px;
    padding-bottom: 32px;
    display: flex;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
