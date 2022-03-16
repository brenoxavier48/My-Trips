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
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <DynamicMap places={places} />
    </>
  )
}

export default HomeTemplate
