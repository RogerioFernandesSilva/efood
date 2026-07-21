import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/Header/Perfil'
import ProductList from '../../components/ProductList'
import { useGetRestCartQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()

  const { data: rest } = useGetRestCartQuery(id!)

  if (!rest) {
    return <h3>Esta Carregando...</h3>
  }
  return (
    <>
      <HeaderPerfil />
      <Banner />
      <div className="container">
        <ProductList restaurants={[rest]} />
      </div>
      <Cart />
    </>
  )
}
export default Perfil
