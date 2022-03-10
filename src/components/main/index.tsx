import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo: imagem de um átomo, escrito 'React Avançado' ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, React, NextJs and Styled Components
    </S.Description>
    <S.Logo
      src="/img/hero-illustration.svg"
      alt="Pessoa de costas sentada em uma cadeira, usando o computador"
    />
  </S.Wrapper>
)

export default Main
