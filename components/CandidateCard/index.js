import { Card, PartyIcon, NumberIcon, ProfileIcon, Fullname } from './styles';

const profileIconBaseUrl = 'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/';

const partyIconSource = (candidateParty) =>
  `/images/party-logos/${candidateParty
    .split(' ')
    .join('-')
    .toLowerCase()}.jpg`;

const CandidateCard = (props) => {
  return (
    <Card {...props}>
      <PartyIcon
        src={
          partyIconSource(props.candidateParty) || 'https://picsum.photos/32'
        }
      />
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
