import AboutTemplate from 'templates/About'
import { GET_PAGES } from 'graphql/queries'
import client from 'graphql/client'

const About = () => <AboutTemplate />

export default About

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)
  console.log(pages)

  return {
    props: {}
  }
}
