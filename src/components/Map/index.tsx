import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Location = {
  latitude: number
  longitude: number
}

type Place = {
  id: string
  name: string
  slug: string
  location: Location
}

export type MapPropTypes = {
  places?: Place[]
}

const Map: React.FC<MapPropTypes> = ({ places }) => (
  <MapContainer
    center={[51.505, -0.09]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, name, location }) => {
      const { latitude, longitude } = location
      return (
        <Marker
          position={[latitude, longitude]}
          title={name}
          key={`place-${name}-${id}`}
        />
      )
    })}
  </MapContainer>
)

export default Map
