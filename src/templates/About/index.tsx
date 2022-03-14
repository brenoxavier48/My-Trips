import { CloseOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from 'components'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      repellendus quo iste architecto, animi labore nam vero error eveniet
      doloribus quam, quas cum nobis? Ducimus qui officia eligendi omnis ab!
    </S.Body>
  </S.Content>
)

export default AboutTemplate
