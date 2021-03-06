import styled from 'styled-components';
import {
  Row as BaseRow,
  GoBackButton as BaseGoBackButton,
  Title as BaseTitle,
  Topics as BaseResults,
} from 'components/PresidentialTopics/styles';
import BaseParagraph from 'components/BaseParagraph';
import BaseSelect from 'components/BaseSelect';
import { CompatibilityPartyCard as BaseCompatibilityPartyCard } from 'components/CompatibilityPartyCard';
import BaseDownloadIcon from 'public/images/icons/download.svg';

export const Row = BaseRow;
export const GoBackButton = BaseGoBackButton;
export const Title = BaseTitle;
export const Paragraph = styled(BaseParagraph)`
  margin-bottom: 0.25rem;
  width: 100%;
`;
export const Tagline = styled(BaseParagraph)`
  color: #04102f;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
`;

export const Select = styled(BaseSelect)`
  margin-bottom: 1.5rem;
  width: 100%;
`;
export const ThinkLikeYou = styled(Tagline)`
  color: #475065;
  font-size: 0.875rem;
  margin-top: 1.5rem;
`;
export const ThinkLikeYouTopics = styled('span')`
  color: #4bc540;
  font-size: 0.875rem;
  margin-left: 0.3rem;
  text-transform: capitalize;
`;
export const OtherResults = styled(Tagline)`
  margin-top: 1.5rem;
`;

export const Results = styled(BaseResults)`
  margin-top: 1.5rem;
`;

export const CompatibilityPartyCard = styled(BaseCompatibilityPartyCard)`
  margin-top: 0.625rem;
`;

export const HorizontalRule = styled('hr')`
  border: 1px solid #e3e5e8;
  width: 100%;
`;

export const Disclaimer = Results;

export const Text = styled(BaseParagraph)`
  margin-top: 1rem;
  width: 100%;
`;

export const Text1 = Text;
export const Text2 = styled(Text)`
  margin-bottom: 1.125rem;
`;

export const Link = styled('a')`
  color: #4bc540;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

export const DownloadIcon = styled(BaseDownloadIcon)`
  margin-right: 0.625rem;
  transform: translateY(0.2rem);
`;

export const DownloadLink = styled(Link)`
  font-size: 0.875rem;
  text-decoration: none;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
