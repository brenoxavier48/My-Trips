import { render, screen } from '@testing-library/react'
import Map, { MapPropTypes } from '.'

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
})
