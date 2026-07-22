import bannerImg from '../../../assets/banner-fundo.png'
import logo from '../../../assets/logo.png'

import * as S from './styles'

const HeaderHome = () => (
  <S.HeaderContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <h1>
        <img src={logo} alt="EFood" />
      </h1>
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </div>
  </S.HeaderContainer>
)

export default HeaderHome
