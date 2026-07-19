class Restaurants {
  title: string
  note: string
  description: string
  infos: string[]
  image: string
  id: number
  type: string

  constructor(
    title: string,
    note: string,
    description: string,
    infos: string[],
    image: string,
    id: number,
    type: string
  ) {
    this.title = title
    this.note = note
    this.description = description
    this.infos = infos
    this.image = image
    this.id = id
    this.type = type
  }
}

export default Restaurants
