import ls from 'local-storage';
import * as Styled from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BaseHeader from 'components/Header';
import Footer from 'components/Footer';

const CheckLabel = (props) => (
  <Styled.WrapperCheckLabel>
    <Image src="/images/icons/check.svg" width="13" height="13" alt="check" />
    <Styled.CheckText {...props} />
  </Styled.WrapperCheckLabel>
);

const LogoList = () => (
  <Styled.BoxLogo>
    <Styled.LogoImage>
      <Image src="/images/jne.svg" width="75" height="80" alt="jne logo" />
    </Styled.LogoImage>
    <Styled.LogoImage>
      <Image
        src="/images/power-of-attorney.svg"
        width="75"
        height="80"
        alt="poder judicial logo"
      />
    </Styled.LogoImage>
    <Styled.LogoImage>
      <Image
        src="/images/public-ministry.svg"
        width="75"
        height="80"
        alt="ministerio público logo"
      />
    </Styled.LogoImage>
    <Styled.LogoImage>
      <Image
        src="/images/el-comercio.svg"
        width="75"
        height="80"
        alt="el comercio logo"
      />
    </Styled.LogoImage>
  </Styled.BoxLogo>
);

const HomePage = () => {
  const router = useRouter();
  ls('op.wizard', {});

  const goToCongressmen = (e) => {
    router.push('/steps/1');
  };
  const goToPresident = (e) => {
    router.push('/presidential-steps/1');
  };

  const electionDate = new Date('2021/04/11');
  const currentDate = new Date();
  const miliseconds = electionDate.getTime() - currentDate.getTime();
  const remainingDays = Math.round(miliseconds / (1000 * 60 * 60 * 24));

  return (
    <Styled.Container>
      <BaseHeader />
      <Styled.Hero>
        <Styled.TextContent>
          <Styled.Title>
            Faltan
            <Styled.Emphasis> {remainingDays} días </Styled.Emphasis>
            para las elecciones <strong>¿Ya sabes por quién votar?</strong>
          </Styled.Title>
          <Styled.Paragraph>
            Te ayudamos a encontrar tus opciones ideales para estas elecciones
            en unos cuantos pasos
          </Styled.Paragraph>
        </Styled.TextContent>
        <Styled.ButtonsRow>
          <Styled.FindMyCandidateButton onClick={goToPresident}>
            <Image
              src="/images/icons/president.svg"
              width="70"
              height="70"
              alt="icono presidente"
            />
            <Styled.ButtonText>
              Encuentra a tu
              <strong> presidente</strong>
            </Styled.ButtonText>
          </Styled.FindMyCandidateButton>
          <Styled.FindMyCandidateButton onClick={goToCongressmen}>
            <Image
              src="/images/icons/congressmen.svg"
              width="70"
              height="70"
              alt="icono congresistas"
            />
            <Styled.ButtonText>
              Encuentra a tus <strong> congresistas</strong>
            </Styled.ButtonText>
          </Styled.FindMyCandidateButton>
        </Styled.ButtonsRow>
      </Styled.Hero>
      <Styled.InfoSection>
        <Styled.InfoText>
          Juntamos toda la información pública para que puedas{' '}
          <Styled.Emphasis> elegir informado.</Styled.Emphasis>
        </Styled.InfoText>
        <LogoList />
        <Styled.InfoCard>
          <Styled.TitleInfoCard>
            Te damos las herramientas para que encuentres a tu
            <Styled.Emphasis> candidato ideal</Styled.Emphasis>
          </Styled.TitleInfoCard>
          <Styled.SubtitleInfoCard>
            Tú eliges qué filtros utilizar:
          </Styled.SubtitleInfoCard>
          <CheckLabel>Candidatos con/sin sentencias</CheckLabel>
          <CheckLabel>Selecciona tus partidos preferidos</CheckLabel>
          <Styled.BackgroundDirections>
            <Image
              src="/images/charco-directions.svg"
              width="109"
              height="120"
              alt="directions"
            />
          </Styled.BackgroundDirections>
        </Styled.InfoCard>
      </Styled.InfoSection>
      <Footer />
    </Styled.Container>
  );
};

export default HomePage;
