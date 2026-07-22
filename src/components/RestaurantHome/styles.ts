import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosa};
  position: relative;

  img {
    max-width: 472px;
    max-height: 217px;
    width: 100%;
    height: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardContent = styled.div`
  padding: 8px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
`
export const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
