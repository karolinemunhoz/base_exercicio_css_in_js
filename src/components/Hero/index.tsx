import { HeroSection, Conteudo, Titulo } from './styles'
import Container from '../../containers/container'

const Hero = () => (
  <HeroSection>
    <Container>
      <Conteudo>
        <Titulo>
          As melhores vagas para tecnologia, design e artes visuais.
        </Titulo>
      </Conteudo>
    </Container>
  </HeroSection>
)

export default Hero
