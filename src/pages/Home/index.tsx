import HeaderHome from '../../components/Header/Home'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <HeaderHome />
      <div className="container">
        <RestaurantList rests={restaurants} isLoading={isLoading} />
      </div>
    </>
  )
}

export default Home
