import styled from 'styled-components'

import { breakpoints, colors } from '../../../styles'

export const HeaderContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
    max-width: 540px;
    width: 100%;

    h1 {
      line-height: 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    .container {
      max-width: 85%;
    }
  }
`

export const Title = styled.h2`
  padding-top: 140px;
  padding-bottom: 40px;
  text-align: center;
  color: ${colors.pink};
  font-size: 36px;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 50px;
    font-size: 24px;
  }
`
