import PagesTemplate, { PageTemplatePropTypes } from 'templates/Pages'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetPageResult, GetPageBySlugResult } from 'graphql/types'
import client from 'graphql/client'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

const Page: React.FC<PageTemplatePropTypes> = ({ heading, body }) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <PagesTemplate heading={heading} body={body} />
}

export default Page

export const getStaticPaths = async () => {
  const { pages } = await client.request<GetPageResult>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugResult>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (page === null) return { notFound: true }

  return {
    props: {
      body: page.body.html,
      heading: page.heading
    }
  }
}
