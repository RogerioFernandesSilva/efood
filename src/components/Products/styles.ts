import { styled } from 'styled-components'
import { cores } from '../../styles'

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
  }
`
