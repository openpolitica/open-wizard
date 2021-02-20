import * as Styled from './styles';

const FilterButton = (props) => {
  return (
    <Styled.Button {...props}>
      <Styled.Icon src="/images/icons/filter.svg" alt="filter" />
      Filtrar opciones
    </Styled.Button>
  );
};

export default FilterButton;
