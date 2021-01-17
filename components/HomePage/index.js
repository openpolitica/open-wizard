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
  FooterContent,
  WriteUs,
  WriteUsEmail,
  TextCopyright,
  BoxSocialMedia,
  SocialMediaList,
  CheckText,
  WrapperCheckLabel,
} from './styles.js';
import { useRouter } from 'next/router';
import BaseButton from 'components/BaseButton';
import BaseHeader from 'components/Header';

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
      <FooterContent>
        <TextCopyright>
          Copyright © 2020 Open Política. Todos los derechos reservados.
        </TextCopyright>
        <WriteUs> Escríbenos</WriteUs>
        <WriteUsEmail href="mailto: hola@openpolitica.com?subject = Feedback&body = Message">
          hola@openpolitica.com
        </WriteUsEmail>
        <BoxSocialMedia>
          <SocialMediaList>
            <a href="http://facebook.com/" target="_blank">
              <img src="../images/icons/facebook.svg" alt="logo facebook" />
            </a>
          </SocialMediaList>
          <SocialMediaList>
            <a href="http://twitter.com/openpolitica" target="_blank">
              <img src="../images/icons/twitter.svg" alt="logo twitter" />
            </a>
          </SocialMediaList>
          <SocialMediaList>
            <a href="http://instagram.com/open.politica" target="_blank">
              <img src="../images/icons/instagram.svg" alt="logo instagram" />
            </a>
          </SocialMediaList>
        </BoxSocialMedia>
      </FooterContent>
    </Container>
  );
};

export default HomePage;
