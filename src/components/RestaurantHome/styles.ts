import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.pink};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 472px;
  height: 100%;

  img {
    max-width: 100%;
    height: 220px;
    display: block;
    object-fit: cover;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;

  ${ButtonLink} {
    margin-top: auto;
    max-width: 82px;
  }
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
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
