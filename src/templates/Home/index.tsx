import { NextSeo } from 'next-seo'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { MapPropTypes } from 'components/Map'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('components/Map'), {
  ssr: false
})

const HomeTemplate: React.FC<MapPropTypes> = ({ places }) => {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips.com.br"
        openGraph={{
          url: 'https://my-trips.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <DynamicMap places={places} />
    </>
  )
}

export default HomeTemplate
