import ls from 'local-storage';
import * as Styled from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BaseHeader from 'components/Header';
import Footer from 'components/Footer';
import BaseButton from 'components/BaseButton';
import { useTopics } from 'hooks/useTopics';
import { useEffect } from 'react';
import { HomePartyCard as PartyCard } from 'components/PartyCard';

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
  const goToAndeanParliament = (e) => {
    router.push('/parliament-steps/1');
  };

  const electionDateStart = new Date('2021/06/06 07:00 GMT-5:00');
  const electionDateEnd = new Date('2021/06/06 19:00 GMT-5:00');
  const currentDate = new Date();
  const miliseconds = electionDateStart.getTime() - currentDate.getTime();
  const milisecondsEnd = electionDateEnd.getTime() - currentDate.getTime();
  const remainingDays = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
  const remainingHours = Math.round(miliseconds / (1000 * 60 * 60));
  const remainingHoursEnd = Math.round(milisecondsEnd / (1000 * 60 * 60));

  const DynamicTime = () => {
    if (remainingDays > 1) {
      return <Styled.Emphasis> {remainingDays} días </Styled.Emphasis>;
    }
    if (remainingDays > 0) {
      return <Styled.Emphasis> {remainingDays} día </Styled.Emphasis>;
    }
    if (remainingHours > 1) {
      return <Styled.Emphasis> {remainingHours} horas </Styled.Emphasis>;
    }
    if (remainingHours > 0) {
      return <Styled.Emphasis> {remainingHours} hora </Styled.Emphasis>;
    }
    if (remainingHoursEnd > 0) {
      return null;
    }
  };

  const DynamicTitle = () => {
    if (remainingHours > 0) {
      return (
        <Styled.Title>
          {remainingDays === 1 || remainingHours === 1 ? 'Falta' : 'Faltan'}
          <DynamicTime />
          para las elecciones <strong>¿Ya sabes por quién votar?</strong>
        </Styled.Title>
      );
    }
    if (remainingHoursEnd > 0) {
      return (
        <Styled.Title>
          El <strong>80% del Perú</strong> ya decidió por quién votar, ¿y tú?
        </Styled.Title>
      );
    } else {
      return (
        <Styled.Title>
          Las elecciones se fueron, pero nosotros nos quedamos.
        </Styled.Title>
      );
    }
  };

  const DynamicParagraph = () => {
    if (remainingHoursEnd > 0) {
      return (
        <Styled.Paragraph>
          Revisa a los dos candidatos que quedaron para esta segunda vuelta.
        </Styled.Paragraph>
      );
    } else {
      return (
        <Styled.Paragraph>
          Revisa los planes de gobierno que presentaron los dos candidatos que
          quedaron para la segunda vuelta.
        </Styled.Paragraph>
      );
    }
  };

  useEffect(() => {
    resetTopics();
    ls('op.wizard', {});
    ls('op.parliament', {});
  }, [resetTopics, router.pathname]);

  return (
    <Styled.Container>
      <BaseHeader />
      <Styled.Hero>
        <Styled.TextContent>
          <DynamicTitle />
          <DynamicParagraph />
        </Styled.TextContent>
        <Styled.ButtonsScroll>
          <Styled.ButtonsRow>
            <PartyCard
              partyName="partido-politico-nacional-peru-libre"
              partyAlias="Perú libre"
            />
            <PartyCard
              partyName="fuerza-popular"
              partyAlias="Fuerza popular"
            />
          </Styled.ButtonsRow>
        </Styled.ButtonsScroll>
      </Styled.Hero>
      <Styled.TextContent2>
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
      </Styled.TextContent2>
      <Footer />
    </Styled.Container>
  );
};

export default HomePage;
