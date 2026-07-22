import RestaurantHome from '../RestaurantHome'
import { Restaurants } from '../../services/api'

import * as S from './styles'
import Loader from '../Loader'

type Props = {
  rests?: Restaurants[]
  isLoading: boolean
}

const RestaurantList = ({ rests, isLoading }: Props) => {
  const setRestsTag = (rest: Restaurants): string[] => {
    const tag: string[] = []

    if (rest.destacado) {
      tag.push('Destaque da semana')
    }

    if (rest.tipo) {
      tag.push(rest.tipo)
    }

    return tag
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {rests &&
            rests.map((rest) => (
              <RestaurantHome
                key={rest.id}
                title={rest.titulo}
                note={rest.avaliacao.toString()}
                description={rest.descricao}
                infos={setRestsTag(rest)}
                image={rest.capa}
                id={rest.id}
              />
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default RestaurantList
