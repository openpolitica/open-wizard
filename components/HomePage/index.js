import ls from 'local-storage';
import {
  Container,
  Hero,
  TextContent,
  Title,
  Paragraph,
  ContentButtonCandidate,
  FindMyCandidateButton,
  TextButton,
  SpanCandidate,
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
    <img src="../images/el-comercio.svg" alt="el comercio logo" />
  </BoxLogo>
);

const HomePage = () => {
  const router = useRouter();
  ls('op.wizard', {});

  const goToCongressmen = (e) => {
    router.push('/steps/1');
  };
  const goToPresident = (e) => {
    router.push('/');
  };

  return (
    <Container>
      <BaseHeader />
      <Hero>
        <TextContent>
          <Title>
            Hay casi 2700 candidatos al congreso{' '}
            <Span>¿Sabes a quién elegir?</Span>
          </Title>
          <Paragraph>
            Te ayudamos a encontrar tus candidatos ideales en 3 sencillos pasos
          </Paragraph>
        </TextContent>
        <ContentButtonCandidate>
          <FindMyCandidateButton onClick={goToPresident}>
            <img src="../images/icons/president.svg" alt="icono presidente" />
            <TextButton>
              Encontrar mi candidato<SpanCandidate> presidencial</SpanCandidate>
            </TextButton>
          </FindMyCandidateButton>
          <FindMyCandidateButton onClick={goToCongressmen}>
            <img src="../images/icons/congressmen.svg" alt="icono presidente" />
            <TextButton>
              Encontrar mi candidato al <SpanCandidate>congreso</SpanCandidate>{' '}
            </TextButton>
          </FindMyCandidateButton>
        </ContentButtonCandidate>
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
          <ButtonStart type="secondary" onClick={goToCongressmen}>
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
