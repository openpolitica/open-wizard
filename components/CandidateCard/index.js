import { Card, PartyIcon, NumberIcon, ProfileIcon, Fullname } from './styles';

const profileIconBaseUrl = 'https://declara.jne.gob.pe/Assets/Fotos-HojaVida/';

const CandidateCard = (props) => {
  return (
    <Card {...props}>
      <PartyIcon src={props.candidateParty || 'https://picsum.photos/32'} />
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
