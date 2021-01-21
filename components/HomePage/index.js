import {
  Container,
  Hero,
  BackgrounHero,
  Title,
  Paragraph,
  InfoCard,
  BackgroundDirections,
  Span,
  InfoText,
  BoxLogo,
  InfoSection,
  SubtitleInfoCard,
  TitleInfoCard,
  ButtonStart,
  CheckText,
  WrapperCheckLabel,
} from './styles.js';
import { useRouter } from 'next/router';
import BaseButton from 'components/BaseButton';
import BaseHeader from 'components/Header';
import Footer from 'components/Footer';

const CheckLabel = (props) => (
  <WrapperCheckLabel>
    <img src="../images/icons/check.svg" alt="check" />
    <CheckText {...props} />
  </WrapperCheckLabel>
);

const LogoList = () => (
  <BoxLogo>
    <img src="../images/jne.svg" alt="jne logo" />
    <img src="../images/power-of-attorney.svg" alt="poder judicial logo" />
    <img src="../images/public-ministry.svg" alt="ministerio público logo" />
  </BoxLogo>
);

const HomePage = () => {
  const router = useRouter();

  const handleStart = (e) => {
    router.push('/steps/1');
  };

  return (
    <Container>
      <BaseHeader />
      <Hero>
        <Title>
          Hay 3,120 candidatos al congreso <Span>¿Sabes a quién elegir?</Span>
        </Title>
        <Paragraph>
          Te ayudamos a encontrar tus candidatos ideales en 3 sencillos pasos
        </Paragraph>
        <BaseButton type="secondary" onClick={handleStart}>
          Encontrar mis candidatos
        </BaseButton>
        <BackgrounHero>
          <img src="../images/charco-inbox.svg" alt="postal" />
        </BackgrounHero>
      </Hero>

      <InfoSection>
        <InfoText>
          Juntamos toda la información pública para que puedas{' '}
          <Span>elegir informado.</Span>
        </InfoText>
        <LogoList />
        <InfoCard>
          <TitleInfoCard>
            Te damos las herramientas para que encuentres a tu candidato ideal
          </TitleInfoCard>
          <SubtitleInfoCard>Tú eliges qué filtros utilizar:</SubtitleInfoCard>
          <CheckLabel>Candidatos con/sin sentencias</CheckLabel>
          <CheckLabel>Selecciona tus partidos preferidos</CheckLabel>
          <ButtonStart type="secondary" onClick={handleStart}>
            Comenzar
          </ButtonStart>
          <BackgroundDirections>
            <img src="../images/charco-directions.svg" alt="directions" />
          </BackgroundDirections>
        </InfoCard>
      </InfoSection>
      <Footer />
    </Container>
  );
};

export default HomePage;
