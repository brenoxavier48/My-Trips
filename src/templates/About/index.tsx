import dynamic from 'next/dynamic'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from 'components'
import * as S from './styles'

const DynamicLinkWrapper = dynamic(() => import('components/LinkWrapper'), {
  ssr: false
})

const AboutTemplate = () => (
  <S.Content>
    <DynamicLinkWrapper href="/">
      <CloseOutline size={32} />
    </DynamicLinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        repellendus quo iste architecto, animi labore nam vero error eveniet
        doloribus quam, quas cum nobis? Ducimus qui officia eligendi omnis ab!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
