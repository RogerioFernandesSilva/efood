import { useEffect, useState } from 'react'
import { Restaurants } from '../../pages/Home'
import * as S from './styles'
import { useParams } from 'react-router-dom'
import { useGetRestCartQuery } from '../../services/api'

const Banner = () => {
  const { id } = useParams()
  const { data: restaurants } = useGetRestCartQuery(id!)

  if (!restaurants) {
    return <h3>Carregando...</h3>
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
