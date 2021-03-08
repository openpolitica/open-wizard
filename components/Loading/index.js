import * as Styled from './styles';

const Loading = (props) => {
  return (
    <Styled.Loading>
      <Styled.Loader src={'/images/icons/votu_logo.svg'} />
      <Styled.FadingEffect />
      <p>Cargando...</p>
    </Styled.Loading>
  );
};

export default Loading;
