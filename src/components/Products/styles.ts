import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.beje};
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
  padding: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 8px;
`

export const Container = styled.div`
  padding: 8px;

  img {
    width: 300px;
    height: 167px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      width: 380px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 370px;
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &.visivel {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  background-color: ${cores.rosa};
  max-width: 1024px;
  max-height: 344px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1001;

  > img {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    max-height: 75vh;
    height: 100%;
  }
`
export const Image = styled.div`
  padding: 32px 24px 32px 32px;
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
  }
`
export const Content = styled.div`
  display: block;
  color: ${cores.beje};
  padding-right: 32px;

  h4 {
    font-size: 18px;
    font-weight: 800;
    padding: 32px 0 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;

    span {
      display: block;
      padding-top: 24px;
      padding-bottom: 16px;
    }
  }

  ${ButtonContainer} {
    max-width: 220px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0px 16px;

    h4 {
      padding: 0 0 16px;
    }

    ${ButtonContainer} {
      max-width: 100%;
    }
  }
`
