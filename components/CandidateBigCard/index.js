import { useState } from 'react';
import {
  Card,
  PartyIcon,
  NumberIcon,
  ProfileIcon,
  Fullname,
  Star,
  MainRow,
  Row,
  Column,
  ContentColumn,
  MemberBox,
  Subtitle,
} from './styles';
import capitalize from '../Steps/PartyResults/startCasePeruvianRegions';

const profileIconBaseUrl = 'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/';

const postulaContent = (role, district, genre) => {
  if (role.indexOf('CONGRESISTA') > -1) {
    return district !== 'PERUANOS RESIDENTES EN EL EXTRANJERO'
      ? `Postula por ${capitalize(district)}`
      : `Postula al Extranjero`;
  } else {
    return genre === 'F' ? `Candidata a Presidente` : `Candidato a Presidente`;
  }
};

export const partyIconSource = (candidateParty) =>
  candidateParty
    ? `/images/party-logos/${candidateParty
        .split(' ')
        .join('-')
        .toLowerCase()}.jpg`
    : 'https://picsum.photos/32';

const CandidateBigCard = (props) => {
  const onStarClick = (event) => {
    if (props.isFavorite) {
      props.removeFavorite(props.candidate.hoja_vida_id);
      return;
    }
    props.addFavorite(props.candidate);
  };

  return (
    <Card {...props}>
      <MainRow>
        <ProfileIcon
          src={
            `${profileIconBaseUrl}${props.profileImageId}.jpg` ||
            `${profileIconBaseUrl}134127.jpg`
          }
        />
        <ContentColumn>
          <Column>
            <Fullname>
              {capitalize(props.candidateFullname) || 'Nombre de candidato'}
            </Fullname>
            <Subtitle>
              {postulaContent(
                props.candidateRole,
                props.district,
                props.candidateGenre,
              )}
            </Subtitle>
          </Column>
          <Row>
            <PartyIcon src={partyIconSource(props.candidateParty)} />
            {props.candidateRole.indexOf('CONGRESISTA') !== -1 ? (
              <NumberIcon>{props.candidateNumber || 'NA'}</NumberIcon>
            ) : null}
          </Row>
        </ContentColumn>
        <Star
          onClick={onStarClick}
          type={props.isFavorite ? 'favorite' : 'notFavorite'}
        />
      </MainRow>
      <Row>
        {props.candidateDesignate === 'No' ? (
          <MemberBox type="green">Militante</MemberBox>
        ) : (
          <MemberBox type="yellow">Invitado del partido</MemberBox>
        )}
      </Row>
    </Card>
  );
};

export default CandidateBigCard;
