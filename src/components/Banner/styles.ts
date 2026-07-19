import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.branco};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    pointer-events: none;
  }

  * {
    position: relative;
    z-index: 2;
  }
`

export const TitleOne = styled.h4`
  font-size: 32px;
  font-weight: 100;
  padding-top: 24px;
  padding-bottom: 156px;
`
export const TitleTwo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 32px;
`
