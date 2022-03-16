import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesResult } from 'graphql/types'

import { MapPropTypes } from 'components/Map'
import HomeTemplate from 'templates/Home'

export default function Home({ places }: MapPropTypes) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesResult>(GET_PLACES)

  return {
    props: {
      places
    }
  }
}
