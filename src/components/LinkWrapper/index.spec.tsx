import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper /> component', () => {
  it('Should render the children passed through props', () => {
    render(<LinkWrapper href="/">Any Children</LinkWrapper>)
    const childrenExpected = screen.getByText('Any Children')
    expect(childrenExpected).toBeInTheDocument()
  })

  it('Should render the link correctly', () => {
    const myLink = '/any-link'
    render(<LinkWrapper href={myLink}>Any link</LinkWrapper>)
    const LinkExpected = screen.getByText('Any link')
    expect(LinkExpected).toHaveAttribute('href', myLink)
  })
})
