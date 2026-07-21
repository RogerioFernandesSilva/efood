import Products from '../Products'
import * as S from './styles'
import { Restaurants } from '../../pages/Home'

type Props = {
  restaurants: Restaurants[]
}

const ProductList = ({ restaurants }: Props) => {
  return (
    <S.Container>
      <S.List>
        {restaurants.map((rest) =>
          rest.cardapio.map((product) => (
            <li key={product.id}>
              <Products
                id={product.id}
                image={product.foto}
                title={product.nome}
                description={product.descricao}
                portion={product.porcao}
                price={product.preco}
              />
            </li>
          ))
        )}
      </S.List>
    </S.Container>
  )
}

export default ProductList
