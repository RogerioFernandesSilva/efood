import RestaurantHome from '../RestaurantHome'
import * as S from './styles'
import Restaurants from '../../models/Restaurants'

export type Props = {
  rests: Restaurants[]
}

const RestaurantList = ({ rests }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {rests.map((rest) => (
          <RestaurantHome
            key={rest.id}
            title={rest.title}
            note={rest.note}
            description={rest.description}
            infos={rest.infos}
            image={rest.image}
            type={rest.type}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default RestaurantList
