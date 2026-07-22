import { useParams } from 'react-router-dom'
import { useGetRestCartQuery } from '../../services/api'

import Loader from '../Loader'

import * as S from './styles'

const Banner = () => {
  const { id } = useParams() as ProductsParams
  const { data: restaurants } = useGetRestCartQuery(id)

  if (!restaurants) {
    return <Loader />
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${restaurants.capa})` }}>
      <div className="container">
        <S.TitleOne>{restaurants.tipo}</S.TitleOne>
        <S.TitleTwo>{restaurants.titulo}</S.TitleTwo>
      </div>
    </S.Imagem>
  )
}

export default Banner
