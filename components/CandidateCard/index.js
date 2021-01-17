import { Card, PartyIcon, NumberIcon, ProfileIcon, Fullname } from './styles';

const profileIconBaseUrl = 'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/';

export const partyIconSource = (candidateParty) =>
  candidateParty
    ? `/images/party-logos/${candidateParty
        .split(' ')
        .join('-')
        .toLowerCase()}.jpg`
    : 'https://picsum.photos/32';

const CandidateCard = (props) => {
  return (
    <Card {...props}>
      <PartyIcon src={partyIconSource(props.candidateParty)} />
      <NumberIcon>{props.candidateNumber || '5'}</NumberIcon>
      <ProfileIcon
        src={
          `${profileIconBaseUrl}${props.profileImageId}.jpg` ||
          `${profileIconBaseUrl}134127.jpg`
        }
      />
      <Fullname>{props.candidateFullname || 'Nombre de candidato'}</Fullname>
    </Card>
  );
};

export default CandidateCard;
