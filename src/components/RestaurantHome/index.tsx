import * as S from './styles'
import Tag from '../Tag'
import Button from '../Button'
import icon from '../../assets/images/estrela.png'

type Props = {
  title: string
  note?: string
  description: string
  infos: string[]
  image: string
  type: string
}

const RestaurantHome = ({
  title,
  note,
  description,
  infos,
  image,
  type
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.CardContent>
      <S.TitleContainer>
        <S.Titulo>{title}</S.Titulo>
        <S.NoteContainer>
          <S.Titulo>{note}</S.Titulo>
          <img src={icon} alt="estrela" />
        </S.NoteContainer>
      </S.TitleContainer>
      <S.Descricao>{description}</S.Descricao>
      <Button type="link" to={type} title="Clique aqui para saber mais">
        Saiba Mais
      </Button>
    </S.CardContent>
  </S.Card>
)

export default RestaurantHome
