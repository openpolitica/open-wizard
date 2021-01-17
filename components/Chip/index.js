import * as Styled from './styles';

const Chip = (props) => {
  return (
    <Styled.Chip {...props}>
      <Styled.ChipIcon src="/images/icons/info.svg" />
      <span>{props.children}</span>
    </Styled.Chip>
  );
};

export default Chip;
