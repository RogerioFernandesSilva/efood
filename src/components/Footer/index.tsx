import * as S from './styles'
import fb from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import logo from '../../assets/logo.png'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <img src={logo} alt="EFood" />
      <S.SocialIcons>
        <li>
          <img src={insta} alt="Instagram" />
        </li>
        <S.SocialIconLiC>
          <img src={fb} alt="Facebook" />
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
