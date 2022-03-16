import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import PlaceTemplate, { PlaceTemplatePropTypes } from 'templates/Place'

import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetPlacesResult, GetPlaceBySlugResultResult } from 'graphql/types'
import client from 'graphql/client'

const Place: React.FC<PlaceTemplatePropTypes> = ({ place }) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlaceTemplate place={place} />
}

export default Place

export const getStaticPaths = async () => {
  const { places } = await client.request<GetPlacesResult>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugResultResult>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (place === null) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
