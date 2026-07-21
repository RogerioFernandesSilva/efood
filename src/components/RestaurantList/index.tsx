import RestaurantHome from '../RestaurantHome'
import * as S from './styles'
import { Restaurants } from '../../pages/Home'

type Props = {
  rests: Restaurants[]
}

const RestaurantList = ({ rests }: Props) => {
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

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {rests.map((rest) => (
            <RestaurantHome
              key={rest.id}
              title={rest.titulo}
              note={rest.avaliacao}
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
