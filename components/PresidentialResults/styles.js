import styled from 'styled-components';
import {
  Row as BaseRow,
  GoBackButton as BaseGoBackButton,
  Title as BaseTitle,
  Topics as BaseResults,
} from 'components/PresidentialTopics/styles';
import BaseParagraph from 'components/BaseParagraph';
import BaseCompatibilityPartyCard from 'components/CompatibilityPartyCard';
import BaseDownloadIcon from 'public/images/icons/download.svg';

export const Row = BaseRow;
export const GoBackButton = BaseGoBackButton;
export const Title = BaseTitle;
export const Tagline = styled(BaseParagraph)`
  font-weight: bold;
  width: 100%;
`;

export const ThinkLikeYou = Tagline;
export const ThinkLikeYouSingleTopic = styled(ThinkLikeYou)`
  color: #4bc540;
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

export const CallToAction = styled(Tagline)`
  font-size: 0.875rem;
  line-height: 1.375rem;
`;

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
