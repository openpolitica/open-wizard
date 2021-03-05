import * as Styled from './styles';

const FavoriteButton = (props) => {
  return (
    <Styled.Button {...props}>
      <Styled.Icon src="/images/icons/starBorderGreen.svg" alt="star" />
      Mis posibles opciones
    </Styled.Button>
  );
};

export default FavoriteButton;
