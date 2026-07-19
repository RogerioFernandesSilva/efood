import * as S from './styles'

type Props = {
  image: string
  title: string
  title2: string
}

const Banner = ({ image, title, title2 }: Props) => (
  <S.Imagem style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <S.TitleOne>{title}</S.TitleOne>
      <S.TitleTwo>{title2}</S.TitleTwo>
    </div>
  </S.Imagem>
)

export default Banner
