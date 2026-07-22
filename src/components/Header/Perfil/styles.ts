import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const HeaderPerfilContainer = styled.header`
  padding: 40px 0 65px 0;
  border-radius: 16px;

  display: flex;

  .container {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0 40px 0;
  }
`
export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;

  li {
    color: ${colors.pink};
    font-weight: 900;
    font-size: 18px;
  }
  .logo-li {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 2;

    img {
      display: block;
      margin: 0 auto;
      max-width: 120px;
      height: auto;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    li {
      font-size: 16px;
    }

    .logo-li {
      transform: translate(-35%, -50%);
      img {
        max-width: 90px;
      }
    }
  }
`

export const Cart = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    display: none;
  }

  span {
    margin-left: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: none;
    }

    img {
      display: block;
      width: 24px;
      height: 24px;
      margin-left: 8px;
    }
  }
`
