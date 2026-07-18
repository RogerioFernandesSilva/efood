import { styled } from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.bgcolor};

  .container > img {
    display: block;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 32px;
  }
`
export const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
`
export const SocialIconLiC = styled.li`
  padding: 0 8px;
`

export const FooterDescription = styled.p`
  text-align: center;
  padding-bottom: 40px;
`
