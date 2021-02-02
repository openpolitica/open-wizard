import * as Styled from './styles';
import { partyIconSource } from 'components/CandidateCard';

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
      <Styled.SeeCandidatesButton type="transparent">
        Ver candidatos
      </Styled.SeeCandidatesButton>
    </Styled.Card>
  );
};

export default PartyCard;
