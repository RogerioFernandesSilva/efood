import { Restaurants } from '../../pages/Home'
import * as S from './styles'

type Props = {
  restaurant: Restaurants
}

const Banner = ({ restaurant }: Props) => {
  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <S.TitleOne>{restaurant.tipo}</S.TitleOne>
        <S.TitleTwo>{restaurant.titulo}</S.TitleTwo>
      </div>
    </S.Imagem>
  )
}

export default Banner
