import { Card, PartyIcon, NumberIcon, ProfileIcon, Fullname } from './styles';

const CandidateCard = (props) => {
  return (
    <Card>
      <PartyIcon src={props.candidateParty || 'https://picsum.photos/32'} />
      <NumberIcon>{props.candidateNumber || '5'}</NumberIcon>
      <ProfileIcon src={props.profileImage || 'https://picsum.photos/32'} />
      <Fullname>{props.candidateFullname || 'Nombre de candidato'}</Fullname>
    </Card>
  );
};

export default CandidateCard;
