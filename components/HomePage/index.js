import ls from 'local-storage';
import * as Styled from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BaseHeader from 'components/Header';
import Footer from 'components/Footer';
import SEO from 'components/SEO';
import BaseButton from 'components/BaseButton';
import { useTopics } from 'hooks/useTopics';
import { useEffect } from 'react';

const CheckLabel = (props) => (
  <Styled.WrapperCheckLabel>
    <Image src="/images/icons/check.svg" width="13" height="13" alt="check" />
    <Styled.CheckText {...props} />
  </Styled.WrapperCheckLabel>
);

const LogoList = () => (
  <Styled.BoxLogo>
    <Styled.LogoDiv>
      <Styled.LogoImage>
        <Image src="/images/jne.svg" width="75" height="80" alt="jne logo" />
      </Styled.LogoImage>
      <Styled.LogoText>HOJAS DE VIDA</Styled.LogoText>
    </Styled.LogoDiv>
    <Styled.LogoDiv>
      <Styled.LogoImage>
        <Image
          src="/images/power-of-attorney.svg"
          width="75"
          height="80"
          alt="poder judicial logo"
        />
      </Styled.LogoImage>
      <Styled.LogoText>SENTENCIAS</Styled.LogoText>
    </Styled.LogoDiv>
    <Styled.LogoDiv>
      <Styled.LogoImage>
        <Image
          src="/images/public-ministry.svg"
          width="75"
          height="80"
          alt="ministerio público logo"
        />
      </Styled.LogoImage>
      <Styled.LogoText>MILITANCIA</Styled.LogoText>
    </Styled.LogoDiv>
    <Styled.LogoDiv>
      <Styled.LogoImage>
        <Image
          src="/images/el-comercio.svg"
          width="75"
          height="80"
          alt="el comercio logo"
        />
      </Styled.LogoImage>
      <Styled.LogoText>SANCIONES</Styled.LogoText>
    </Styled.LogoDiv>
  </Styled.BoxLogo>
);

const HomePage = () => {
  const router = useRouter();
  const { resetTopics } = useTopics();

  const goToCongressmen = (e) => {
    router.push('/steps/1');
  };
  const goToGovernmentPlan = (e) => {
    router.push('/presidential-steps/1');
  };

  const electionDate = new Date('2021/04/11');
  const currentDate = new Date();
  const miliseconds = electionDate.getTime() - currentDate.getTime();
  const remainingDays = Math.round(miliseconds / (1000 * 60 * 60 * 24));

  useEffect(() => {
    resetTopics();
    ls('op.wizard', {});
  }, [resetTopics, router.pathname]);

  return (
    <Styled.Container>
      <SEO />
      <BaseHeader />
      <Styled.Hero>
        <Styled.TextContent>
          <Styled.Title>
            Faltan
            <Styled.Emphasis> {remainingDays} días </Styled.Emphasis>
            para las elecciones <strong>¿Ya sabes por quién votar?</strong>
          </Styled.Title>
          <Styled.Paragraph>
            Te ayudamos a encontrar tus opciones para estas elecciones en unos
            cuantos pasos
          </Styled.Paragraph>
        </Styled.TextContent>
        <Styled.ButtonsRow>
          <Styled.FindMyCandidateButton onClick={goToGovernmentPlan}>
            <Image
              src="/images/icons/governmentPlan.svg"
              width="70"
              height="70"
              alt="icono plan de gobierno"
            />
            <Styled.ButtonText>
              Encuentra tu mejor
              <strong> plan de gobierno</strong>
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
          ¿Quieres ver la lista de todos los candidatos?
        </Styled.InfoText>
        <Styled.Paragraph>
          <strong>
            Encuentra todos los datos que buscas sobre todos los posibles
            presidentes:
          </strong>{' '}
          Hojas de vida, sentencias, sanciones, entre otros.
        </Styled.Paragraph>
        <BaseButton onClick={() => router.push('/presidential-list/')}>
          Ver lista de candidatos presidenciales
        </BaseButton>
      </Styled.InfoSection>
      <Styled.TextContent>
        <Styled.InfoText>
          Juntamos toda la información pública para que puedas{' '}
          <Styled.Emphasis> elegir informado.</Styled.Emphasis>
        </Styled.InfoText>
        <Styled.Paragraph>
          Consultamos distintas bases de datos de acceso público:
        </Styled.Paragraph>
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
      </Styled.TextContent>
      <Footer />
    </Styled.Container>
  );
};

export default HomePage;
