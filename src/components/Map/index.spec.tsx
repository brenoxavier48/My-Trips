import { render, screen } from '@testing-library/react'
import Map from '.'

const makeSut = () => ({
  Sut: <Map />
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
})
