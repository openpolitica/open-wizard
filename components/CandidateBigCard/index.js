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
  MemberBox,
  Subtitle,
} from './styles';
import capitalize from '../Steps/PartyResults/startCasePeruvianRegions';

const profileIconBaseUrl = 'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/';

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
        <Column
          style={{
            padding: '0 0.4rem 0 0.4rem',
          }}>
          <Column>
            <Fullname>
              {capitalize(props.candidateFullname) || 'Nombre de candidato'}
            </Fullname>
            <Subtitle>
              {props.district !== 'PERUANOS RESIDENTES EN EL EXTRANJERO'
                ? `Postula por ${capitalize(props.district)}`
                : `Postula al Extranjero`}
            </Subtitle>
          </Column>
          <Row>
            <PartyIcon src={partyIconSource(props.candidateParty)} />
            <NumberIcon>{props.candidateNumber || '5'}</NumberIcon>
          </Row>
        </Column>
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
