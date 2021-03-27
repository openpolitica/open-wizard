import * as Styled from './styles';
import { partyIconSource } from 'components/CandidateCard';

const profileBaseUrl = process.env.profilePictures.baseUrl;

const CompatibilityPartyCard = ({
  partyName,
  partyAlias,
  profileImageId,
  compatibility,
  ...props
}) => {
  return (
    <Styled.Card {...props}>
      <Styled.PartyIcon src={partyIconSource(partyName)} />
      <Styled.ProfileIcon
        src={
          profileImageId
            ? `${profileBaseUrl}${profileImageId}.jpg`
            : `${profileBaseUrl}134127.jpg`
        }
      />
      <Styled.Column>
        <Styled.PartyName>
          {partyAlias || 'Nombre del partido'}
        </Styled.PartyName>
        <Styled.Compatibility>{`${
          compatibility || '0'
        }% de compatibilidad`}</Styled.Compatibility>
      </Styled.Column>
      <Styled.ArrowCircle />
    </Styled.Card>
  );
};

const PresidentialPartyCard = ({
  partyName,
  partyAlias,
  profileImageId,
  compatibility,
  ...props
}) => {
  return (
    <Styled.Card {...props}>
      <Styled.PartyIcon src={partyIconSource(partyName)} />
      <Styled.ProfileIcon
        src={
          profileImageId
            ? `${profileBaseUrl}${profileImageId}.jpg`
            : `${profileBaseUrl}134127.jpg`
        }
      />
      <Styled.Column>
        <Styled.PartyName>
          {partyAlias || 'Nombre del partido'}
        </Styled.PartyName>
      </Styled.Column>
      <Styled.ArrowCircle />
    </Styled.Card>
  );
};

export { PresidentialPartyCard, CompatibilityPartyCard };
