import styled from 'styled-components';
import {
  PartyIcon as BasePartyIcon,
  Card as BaseCard,
  Fullname as BasePartyName,
  ArrowCircle as BaseArrowCircle,
} from 'components/CandidateCard/styles';

export const Card = BaseCard;

export const PartyIcon = BasePartyIcon;

export const ProfileIcon = BasePartyIcon;

export const PartyName = BasePartyName;

export const Compatibility = styled(BasePartyName)`
  color: #8e94a4;

  ${Card}:hover & {
    text-decoration: none;
  }
`;

export const ArrowCircle = BaseArrowCircle;

export const Column = styled('div')`
  display: flex;
  flex-direction: column;
`;
