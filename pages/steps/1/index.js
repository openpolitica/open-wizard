import * as Styled from './styles';

export default function Step1() {
  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Step>
        <Styled.Stepper steps={1} of={4} />
        <Styled.Title>¿Dónde vives?</Styled.Title>
        <Styled.Paragraph align="center">
          Con este filtro solo te mostraremos candidatos para tu departamento.
        </Styled.Paragraph>
        <Styled.Select>
          <option>Seleccione uno</option>
          <option value="Lima">Lima</option>
          <option value="Arequipa">Arequipa</option>
          <option value="Amazonas">Amazonas</option>
        </Styled.Select>
        <Styled.LinkButton>Vivo en el extranjero</Styled.LinkButton>
      </Styled.Step>
      <Styled.Button>Continuar</Styled.Button>
    </Styled.Container>
  );
}
