import * as Styled from './styles';

const Loading = (props) => {
  return (
    <Styled.Loading>
      <Styled.Loader src="/images/icons/votu_logo.svg" width="90" height="35" />
      <Styled.FadingEffect />
      <p>Cargando...</p>
    </Styled.Loading>
  );
};

export default Loading;
