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
