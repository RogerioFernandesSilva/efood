import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import bannerImg from '../../../assets/banner-fundo.png'
import logo from '../../../assets/logo.png'
import cart from '../../../assets/carrinho.png'

import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/cart'

import * as S from './styles'

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
          <Link to={'/'} title="Voltar para Restaurantes">
            <li>Restaurantes</li>
          </Link>
          <Link to={'/'} title="Voltar para Restaurantes">
            <li className="logo-li">
              <img src={logo} alt="EFood" />
            </li>
          </Link>
          <S.Cart onClick={openCart}>
            {items.length}
            <span> produto(s) no carrinho</span>
            <img src={cart} alt="Carrinho" />
          </S.Cart>
        </S.Links>
      </div>
    </S.HeaderPerfilContainer>
  )
}

export default HeaderPerfil
