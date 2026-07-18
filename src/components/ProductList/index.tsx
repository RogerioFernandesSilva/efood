import Products from '../Products'
import * as S from './styles'
import ProducsType from '../../models/Products'

type Props = {
  products: ProducsType[]
}

const ProductList = ({ products }: Props) => (
  <S.Container>
    <S.List>
      {products.map((product) => (
        <Products
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </S.List>
  </S.Container>
)

export default ProductList
