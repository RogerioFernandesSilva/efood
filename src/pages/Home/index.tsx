import HeaderHome from '../../components/Header/Home'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <HeaderHome />
        <div className="container">
          <RestaurantList rests={restaurants} />
        </div>
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
