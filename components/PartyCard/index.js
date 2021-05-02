import Router from 'next/router';
import * as Styled from './styles';
import { partyIconSource } from 'components/CandidateCard';
import toggleSlug from './toggleSlug';

const onSeeCandidatesButtonClick = (partyName) =>
  Router.push(`/results/${toggleSlug(partyName)}`);

const onSeeParliamentCandidates = (partyName) =>
  Router.push(`/parliament-results/${toggleSlug(partyName)}`);

const numberOfCandidates = (number) =>
  number ? `${number} candidatos` : '12 candidatos';

const PartyCard = (props) => {
  return (
    <Styled.Card>
      <Styled.PartyIcon src={partyIconSource(props.partyName)} />
      <Styled.PartyName>
        {props.partyAlias || 'Partido Político'}
      </Styled.PartyName>
      <Styled.NumberOfCandidates>
        {numberOfCandidates(props.numberOfCandidates)}
      </Styled.NumberOfCandidates>
      <Styled.SeeCandidatesButton
        type="transparent"
        onClick={() => onSeeCandidatesButtonClick(props.partyName)}>
        Ver candidatos
      </Styled.SeeCandidatesButton>
    </Styled.Card>
  );
};

const PartyParliamentCard = (props) => {
  return (
    <Styled.Card>
      <Styled.PartyIcon src={partyIconSource(props.partyName)} />
      <Styled.PartyName>
        {props.partyAlias || 'Partido Político'}
      </Styled.PartyName>
      <Styled.NumberOfCandidates>
        {numberOfCandidates(props.numberOfCandidates)}
      </Styled.NumberOfCandidates>
      <Styled.SeeCandidatesButton
        type="transparent"
        onClick={() => onSeeParliamentCandidates(props.partyName)}>
        Ver candidatos
      </Styled.SeeCandidatesButton>
    </Styled.Card>
  );
};

const HomePartyCard = (props) => {
  return (
    <Styled.HomeCard as="a" href={`presidential-list/${props.partyName}`}>
      <Styled.PartyIcon src={partyIconSource(props.partyName)} />
      <Styled.HomePartyName>
        {props.partyAlias || 'Partido Político'}
      </Styled.HomePartyName>
      <Styled.SeePresidentialList>
        Ver plancha presidencial
      </Styled.SeePresidentialList>
    </Styled.HomeCard>
  );
};

export { PartyCard, PartyParliamentCard, HomePartyCard };
