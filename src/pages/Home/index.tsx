import HeaderHome from '../../components/Header/Home'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'

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
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  })
  return (
    <>
      <HeaderHome />
      <div className="container">
        <RestaurantList rests={restaurants} />
      </div>
    </>
  )
}

export default Home
