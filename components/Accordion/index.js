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
  const onTitleRowClick = (event) => {
    props.titleRowClick(props.type);
  };

  return (
    <Card {...props}>
      <TitleRow onClick={onTitleRowClick}>
        <AccordionIcon icon={props.type} />
        <Title>{props.title}</Title>
        <Chevron direction={props.collapsed ? 'chevronDown' : 'chevronUp'} />
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
