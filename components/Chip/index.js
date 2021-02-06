import * as Styled from './styles';

const iconPriority = {
  good: 'good.svg',
  info: 'info.svg',
  bad: 'bad.svg',
};

const Chip = (props) => {
  return (
    <Styled.Chip {...props}>
      <Styled.ChipIcon src={`/images/icons/${iconPriority[props.type || 'info']}`} />
      <span>{props.children}</span>
    </Styled.Chip>
  );
};

export default Chip;
