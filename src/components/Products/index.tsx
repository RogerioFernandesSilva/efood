import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Products = ({ image, title, description }: Props) => (
  <S.Card>
    <S.Container>
      <img src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button
        type="button"
        title="Adicionar ao carrinho"
        onClick={() => alert('Produto adicionado!')}
      >
        Adicionar ao carrinho
      </Button>
    </S.Container>
  </S.Card>
)

export default Products
