import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'
import fechar from '../../assets/images/fechar.png'

interface Props {
  image: string
  title: string
  description: string
  portion: string
  price: number
  id: number
}

interface ModalState extends Props {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Products = ({ image, title, description, portion, price, id }: Props) => {
  const getDescriptionSlice = (description: string) => {
    if (description.length > 105) {
      return description.slice(0, 102) + '...'
    }
    return description
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    image: image,
    title: title,
    description: description,
    id: id,
    portion: portion,
    price: price
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      image: image,
      title: title,
      description: description,
      id: id,
      portion: portion,
      price: price
    })
  }

  return (
    <>
      <S.Card>
        <S.Container>
          <img src={image} alt={title} />
          <S.Title>{title}</S.Title>
          <S.Description>{getDescriptionSlice(description)}</S.Description>
          <Button
            type="button"
            title="Mais Detalhes"
            onClick={() => {
              setModal({
                isVisible: true,
                image: image,
                title: title,
                description: description,
                id: id,
                portion: portion,
                price: price
              })
            }}
          >
            Mais Detalhes
          </Button>
        </S.Container>
      </S.Card>
      <S.Overlay
        className={modal.isVisible ? 'visivel' : ''}
        onClick={() => {
          closeModal()
        }}
      >
        <S.ModalContainer className="container">
          <img
            src={fechar}
            alt="Fechar"
            onClick={() => {
              closeModal()
            }}
          />
          <S.Image>
            <img src={image} alt="" />
          </S.Image>
          <S.Content>
            <h4>{title}</h4>
            <p>
              {description}
              <span>{portion}</span>
            </p>
            <Button
              type="button"
              title="Adicionar ao Carrinho"
              onClick={() => alert('Produto adicionado!')}
            >{`Adicionar ao carrinho - ${formataPreco(price)}`}</Button>
          </S.Content>
        </S.ModalContainer>
      </S.Overlay>
    </>
  )
}

export default Products
