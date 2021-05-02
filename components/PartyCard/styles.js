import styled from 'styled-components';
import { PartyIcon as CandidatePartyIcon } from 'components/CandidateCard/styles';
import BaseTitle from 'components/BaseTitle';
import BaseParagraph from 'components/BaseParagraph';
import BaseButton from 'components/BaseButton';

export const Card = styled('div')`
  align-items: center;
  background-color: white;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 10rem;
  padding: 1rem 0 0;
  width: 10rem;
`;

export const PartyIcon = CandidatePartyIcon;

export const PartyName = styled(BaseTitle)`
  font-size: 0.75rem;
  line-height: 0.75rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const NumberOfCandidates = styled(BaseParagraph)`
  margin-top: 0.25rem;
`;

export const SeeCandidatesButton = styled(BaseButton)`
  font-size: 0.75rem;
  height: 1.875rem;
  line-height: 0.875rem;
  margin-top: 1rem;
  min-width: 6.375rem;
`;

export const HomeCard = styled(Card)`
  justify-content: space-around;
  padding: 1rem 0;
  text-decoration: none;
`;

export const HomePartyName = styled(PartyName)`
  font-size: 1rem;
`;

export const SeePresidentialList = styled(BaseParagraph)`
  font-size: 0.7rem;

  ${HomeCard}:hover & {
    text-decoration: underline;
  }
`;
