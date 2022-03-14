import Link from 'next/link'
import * as S from './styles'

type LinkWrapperPropTypes = {
  href: string
  children: React.ReactNode
}

const LinkWrapper: React.FC<LinkWrapperPropTypes> = ({ href, children }) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
