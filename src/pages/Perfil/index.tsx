import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurants } from '../Home'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/Header/Perfil'
import ProductList from '../../components/ProductList'

const Perfil = () => {
  const { id } = useParams()
  const [rest, setRest] = useState<Restaurants>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurants[]) => {
        const restauranteEncontrado = data.find((r) => r.id === Number(id))
        if (restauranteEncontrado) {
          setRest(restauranteEncontrado)
        }
      })
      .catch((err) => console.error('Erro ao carregar dados:', err))
  }, [id])

  if (!rest) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <Banner restaurant={rest} /> {/* Passando o restaurante aqui */}
      <div className="container">
        <ProductList restaurants={[rest]} />
      </div>
    </>
  )
}

export default Perfil
