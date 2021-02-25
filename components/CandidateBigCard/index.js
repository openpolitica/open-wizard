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
  MemberBox,
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
    props.starClick();
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
        <Row
          style={{
            flexDirection: 'column',
            padding: '0 0.4rem 0 0.4rem',
          }}>
          <Row style={{ alignItems: 'flex-end' }}>
            <Fullname>
              {capitalize(props.candidateFullname) || 'Nombre de candidato'}
            </Fullname>
          </Row>
          <Row>
            <PartyIcon src={partyIconSource(props.candidateParty)} />
            <NumberIcon>{props.candidateNumber || '5'}</NumberIcon>
          </Row>
        </Row>
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
