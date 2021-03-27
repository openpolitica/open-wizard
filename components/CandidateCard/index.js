import Link from 'next/link';
import {
  Card,
  PartyIcon,
  NumberIcon,
  ProfileIcon,
  Fullname,
  ArrowCircle,
} from './styles';

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
    <Link
      href={{
        pathname: props.href || `/candidate/${props.systemId}`,
        query: { fromPath: window.location.pathname },
      }}
      as={props.href || `/candidate/${props.systemId}`}>
      <Card {...props}>
        <PartyIcon src={partyIconSource(props.candidateParty)} />
        {props.candidateNumber ? (
          <NumberIcon>{props.candidateNumber}</NumberIcon>
        ) : null}
        <ProfileIcon
          src={
            `${profileIconBaseUrl}${props.profileImageId}.jpg` ||
            `${profileIconBaseUrl}134127.jpg`
          }
        />
        <Fullname>
          {props.candidateFullname.toLowerCase() || 'Nombre de candidato'}
        </Fullname>
        <ArrowCircle />
      </Card>
    </Link>
  );
};

export default CandidateCard;
