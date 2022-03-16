export type Location = {
  latitude: number
  longitude: number
}

export type Place = {
  id: string
  name: string
  slug: string
  location: Location
}

export type Gallery = {
  url: string
  height: number
  width: number
}

export type CMSPlace = Place & {
  description: {
    html: string
  }
  gallery: Gallery[]
}
