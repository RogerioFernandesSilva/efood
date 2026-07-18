import HeaderHome from '../../components/Header/Home'
import RestaurantList from '../../components/RestaurantList'
import Japones from '../../assets/images/Japones.png'
import Italian from '../../assets/images/Italian.png'
import Restaurants from '../../models/Restaurants'

const restaurantes: Restaurants[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da Semana', 'Japonesa'],
    image: Japones,
    type: 'japonese'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    note: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: Italian,
    type: 'italian'
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da Semana', 'Japonesa'],
    image: Japones,
    type: 'japonese'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    note: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: Italian,
    type: 'italian'
  },
  {
    id: 5,
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da Semana', 'Japonesa'],
    image: Japones,
    type: 'japonese'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    note: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: Italian,
    type: 'italian'
  }
]
const Home = () => (
  <>
    <HeaderHome />
    <div className="container">
      <RestaurantList rests={restaurantes} />
    </div>
  </>
)

export default Home
