import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import * as S from './styles'

type CardProps = {
  children: React.ReactNode
}

const Cart = ({ children }: CardProps) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          children
        ) : (
          <S.Texts>
            <h3>O Carrinho está vazio! </h3>
            <p>Adicione pelo menos um produto para continuar com a compra</p>
          </S.Texts>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
