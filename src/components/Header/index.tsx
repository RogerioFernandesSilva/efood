import { Imagem, Logo, TextHeader } from './styles'
import logo from '../../../src/assets/images/logo.png'
import headerimg from '../../assets/images/fundo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${headerimg})` }}>
    <Logo src={logo} alt="efood" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </Imagem>
)

export default Header
