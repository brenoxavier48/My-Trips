import PagesTemplate from 'templates/Pages'
import { GET_PAGES } from 'graphql/queries'
import client from 'graphql/client'

const About = () => <PagesTemplate />

export default About

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)
  console.log(pages)

  return {
    props: {}
  }
}
