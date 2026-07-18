import Banner from '../../../components/Banner'
import HeaderPerfil from '../../../components/Header/Perfil'
import ProductList from '../../../components/ProductList'
import Products from '../../../models/Products'
import japa from '../../../assets/images/Japones.png'

const produtosJapanese: Products[] = [
  {
    id: 1,
    title: 'Rodizio Japonês',
    description:
      'A clássica Rodízio Japonês, com muita variedade! Peça já o seu!',
    image: japa
  },
  {
    id: 2,
    title: 'Rodizio Japonês',
    description:
      'A clássica Rodízio Japonês, com muita variedade! Peça já o seu!',
    image: japa
  },
  {
    id: 3,
    title: 'Rodizio Japonês',
    description:
      'A clássica Rodízio Japonês, com muita variedade! Peça já o seu!',
    image: japa
  },
  {
    id: 4,
    title: 'Rodizio Japonês',
    description:
      'A clássica Rodízio Japonês, com muita variedade! Peça já o seu!',
    image: japa
  },
  {
    id: 5,
    title: 'Rodizio Japonês',
    description:
      'A clássica Rodízio Japonês, com muita variedade! Peça já o seu!',
    image: japa
  },
  {
    id: 6,
    title: 'Rodizio Japonês',
    description:
      'A clássica Rodízio Japonês, com muita variedade! Peça já o seu!',
    image: japa
  }
]

const Japanese = () => (
  <>
    <HeaderPerfil />
    <Banner image={japa} title="Japonesa" title2="Hioki Sushi" />
    <div className="container">
      <ProductList products={produtosJapanese} />
    </div>
  </>
)

export default Japanese
