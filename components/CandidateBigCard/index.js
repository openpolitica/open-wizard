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
  RowBorderUp,
  SocialTwitterIcon,
  SocialFacebookIcon,
  SocialLink,
  ImageColumn,
} from './styles';
import capitalize from '../Steps/PartyResults/startCasePeruvianRegions';

const profileIconBaseUrl = 'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/';

const contentPerCandidateType = (role, district, genre) => {
  if (role.includes('CONGRESISTA')) {
    return district !== 'PERUANOS RESIDENTES EN EL EXTRANJERO'
      ? `Postula por ${capitalize(district)}`
      : `Postula al Extranjero`;
  }
  if (role.includes('PRESIDENTE')) {
    const specificRole = role.includes('PRIMER')
      ? '1ra Vicepresidencia'
      : role.includes('SEGUNDO')
      ? '2da Vicepresidencia'
      : 'Presidencia';
    return genre === 'F'
      ? `Candidata a ${specificRole}`
      : `Candidato a ${specificRole}`;
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
        <ImageColumn>
          <ProfileIcon
            src={`${profileIconBaseUrl}${props.profileImageId}.jpg`}
          />
        </ImageColumn>
        <ContentColumn>
          <Column>
            <Fullname>
              {capitalize(props.candidateFullname) || 'Nombre de candidato'}
            </Fullname>
            <Subtitle>
              {contentPerCandidateType(
                props.candidateRole,
                props.district,
                props.candidateGenre,
              )}
            </Subtitle>
          </Column>
          <Row>
            <PartyIcon src={partyIconSource(props.candidateParty)} />
            {props.candidateRole.includes('CONGRESISTA') ? (
              <NumberIcon>{props.candidateNumber || 'NA'}</NumberIcon>
            ) : null}
          </Row>
        </ContentColumn>
        {props.runsForCongress ? (
          <Star
            onClick={onStarClick}
            type={props.isFavorite ? 'favorite' : 'notFavorite'}
          />
        ) : null}
      </MainRow>
      <RowBorderUp>
        {props.candidateDesignate === 'No' ? (
          <MemberBox type="green">Militante</MemberBox>
        ) : (
          <MemberBox type="yellow">Invitado del partido</MemberBox>
        )}
      </RowBorderUp>
      {props.candidateTwitterLink || props.candidateFacebookLink ? (
        <RowBorderUp>
          <Subtitle>REDES SOCIALES</Subtitle>
          {props.candidateTwitterLink ? (
            <SocialLink
              href={props.candidateTwitterLink}
              target="_blank"
              rel="noopener noreferrer">
              <SocialTwitterIcon
                src="/images/icons/candidateTwitter.svg"
                alt="star"
              />
            </SocialLink>
          ) : null}
          {props.candidateFacebookLink ? (
            <SocialLink
              href={props.candidateFacebookLink}
              target="_blank"
              rel="noopener noreferrer">
              <SocialFacebookIcon
                src="/images/icons/candidateFacebook.svg"
                alt="star"
              />
            </SocialLink>
          ) : null}
        </RowBorderUp>
      ) : null}
    </Card>
  );
};

export default CandidateBigCard;
