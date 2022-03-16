import { render, screen } from '@testing-library/react'
import Map, { MapPropTypes } from '.'

import { Marker } from 'react-leaflet'

import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn((path: string) => path)
  })
}))

const makeSut = (props: MapPropTypes = {}) => ({
  Sut: <Map {...props} />
})

const makePlaceObject = (customPlaceObject = {}) => ({
  id: '1',
  name: 'Any Place',
  slug: 'anySlug',
  location: {
    latitude: 0,
    longitude: 0
  },
  ...customPlaceObject
})
jest.clearAllMocks
describe('<Map /> component', () => {
  it('should render without any marker', () => {
    const { Sut } = makeSut()
    render(Sut)
    const expectedLink = screen.getByRole('link', {
      name: /a js library for interactive maps/i
    })
    expect(expectedLink).toBeInTheDocument()
  })

  it('should render with the markers in correct place', () => {
    const firstPlace = makePlaceObject()
    const secondPlace = makePlaceObject({ id: '2', name: 'other place' })

    const { Sut } = makeSut({ places: [firstPlace, secondPlace] })
    render(Sut)

    const expectedFirstTitle = screen.getByTitle(firstPlace.name)
    const expectedSecondTitle = screen.getByTitle(firstPlace.name)
    expect(expectedFirstTitle).toBeInTheDocument()
    expect(expectedSecondTitle).toBeInTheDocument()
  })

  // it('should pass the correct location to the Marker component', () => {
  //   const { push } = useRouter()
  //   const markerSpy = jest.spyOn(Marker, 'render' as never)
  //   const place = makePlaceObject()

  //   const { Sut } = makeSut({ places: [place] })
  //   render(Sut)

  //   expect(markerSpy).toBeCalledWith(
  //     {
  //       title: place.name,
  //       position: [place.location.latitude, place.location.longitude],
  //       eventHandlers: { click: () => push(`/place/${place.slug}`) }
  //     },
  //     null
  //   )
  // })
})
