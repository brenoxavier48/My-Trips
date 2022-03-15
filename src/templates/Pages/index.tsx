import dynamic from 'next/dynamic'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'

const DynamicLinkWrapper = dynamic(() => import('components/LinkWrapper'), {
  ssr: false
})

export type PageTemplatePropTypes = {
  heading: string
  body: string
}

const PagesTemplate: React.FC<PageTemplatePropTypes> = ({ heading, body }) => (
  <S.Content>
    <DynamicLinkWrapper href="/">
      <CloseOutline size={32} />
    </DynamicLinkWrapper>
    <S.Heading>{heading}</S.Heading>
    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PagesTemplate
