import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles'

export const HeaderContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
    max-width: 540px;
    witdh 100%;
  }
`

export const Title = styled.h1`
  padding-top: 140px;
  padding-bottom: 40px;
  text-align: center;
  color: ${cores.rosa};
  font-size: 36px;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 50px;
    font-size: 24px;
  }
`
