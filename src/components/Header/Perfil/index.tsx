import * as S from './styles'
import bannerImg from '../../../assets/images/banner-fundo.png'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/cart'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderPerfilContainer style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <S.Links>
          <Link to={'/'}>
            <li>Restaurantes</li>
          </Link>
          <li className="logo-li">
            <Link to={'/'}>
              <S.Image src={logo} alt="EFood" />
            </Link>
          </li>
          <S.Cart onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.Cart>
        </S.Links>
      </div>
    </S.HeaderPerfilContainer>
  )
}

export default HeaderPerfil
