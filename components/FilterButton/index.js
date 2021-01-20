import * as Styled from './styles';

const FilterButton = (props) => {
  return (
    <Styled.Button {...props}>
      <img src="../images/icons/filter.svg" alt="filter" />
      Filtra
    </Styled.Button>
  );
};

export default FilterButton;
