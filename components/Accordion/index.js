import { useState } from 'react';
import {
  Card,
  TitleRow,
  AccordionIcon,
  Title,
  Chevron,
  ContentRow,
  ContentText,
} from './styles';
import processCandidateContent from './processCandidateContent';

const Accordion = (props) => {
  const onChevronClick = (event) => {
    props.chevronClick(props.type);
  };

  return (
    <Card {...props}>
      <TitleRow>
        <AccordionIcon icon={props.type} />
        <Title>{props.title}</Title>
        <Chevron
          direction={props.collapsed ? 'chevronDown' : 'chevronUp'}
          onClick={onChevronClick}
        />
      </TitleRow>
      {!props.collapsed ? (
        <ContentRow>
          <ContentText>
            {processCandidateContent(props.type, props.content)}
          </ContentText>
        </ContentRow>
      ) : null}
    </Card>
  );
};

export default Accordion;
