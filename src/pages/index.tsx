import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('components/Map'), {
  ssr: false
})

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <DynamicMap
        places={[
          {
            id: '1',
            name: 'Any Place',
            slug: 'anySlug',
            location: {
              latitude: 0,
              longitude: 0
            }
          }
        ]}
      />
    </>
  )
}
