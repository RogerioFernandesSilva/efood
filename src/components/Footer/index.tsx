import * as S from './styles'
import fb from '../../assets/images/fb.png'
import insta from '../../assets/images/insta.png'
import twitter from '../../assets/images/twitter.png'
import logo from '../../assets/images/logo.png'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <img src={logo} alt="" />
      <S.SocialIcons>
        <li>
          <img src={insta} alt="" />
        </li>
        <S.SocialIconLiC>
          <img src={fb} alt="" />
        </S.SocialIconLiC>
        <li>
          <img src={twitter} alt="" />
        </li>
      </S.SocialIcons>
      <S.FooterDescription>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </S.FooterDescription>
    </div>
  </S.FooterContainer>
)

export default Footer
