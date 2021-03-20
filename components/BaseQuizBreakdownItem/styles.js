import styled from 'styled-components';
import BaseTitle from 'components/BaseTitle';
import BaseParagraph from 'components/BaseParagraph';

export const TopicIcon = styled('svg')`
  color: #5bc13e;

  path {
    fill: currentColor;
    stroke: currentColor;
  }
`;

export const TopicTitle = styled(BaseTitle)`
  font-size: 0.9rem;
  margin-left: 0.3rem;
  margin-right: 0.2rem;
  text-transform: capitalize;
  color: #475065;
  font-weight: 600;
`;

export const TopicDetail = styled(BaseParagraph)`
  margin-top: 0.063rem;
  margin-left: 0.125rem;
`;

export const TopicItem = styled('li')`
  align-content: center;
  display: flex;

  &:first-child {
    border-radius: 0.25rem 0.25rem 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 0.25rem 0.25rem;
  }
`;
