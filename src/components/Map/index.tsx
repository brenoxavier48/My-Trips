import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Place } from 'domain/abstractions'
import { useRouter } from 'next/router'
import { MapWrapper } from './styles'

export type MapPropTypes = {
  places?: Place[]
}

const Map: React.FC<MapPropTypes> = ({ places }) => {
  const { push } = useRouter()
  return (
    <MapWrapper>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map(({ id, name, location, slug }) => {
          const { latitude, longitude } = location
          return (
            <Marker
              position={[latitude, longitude]}
              title={name}
              key={`place-${name}-${id}`}
              eventHandlers={{
                click: () => push(`/place/${slug}`)
              }}
            />
          )
        })}
      </MapContainer>
    </MapWrapper>
  )
}

export default Map
