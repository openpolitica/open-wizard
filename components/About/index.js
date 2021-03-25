import Footer from 'components/Footer';
import SEO from 'components/SEO';
import * as Styled from './styles';

export default function About() {
  return (
    <Styled.Container>
      <SEO title="VOTU | Sobre el proyecto" />
      <Styled.Header />
      <Styled.Content>
        <Styled.Title>Algunos detalles sobre el proyecto</Styled.Title>
        <Styled.Paragraph>
          <strong>VOTU </strong>
          es el primer producto digital de{' '}
          <Styled.ExternalLink
            href="http://www.openpolitica.com"
            target="_blank">
            Open Política.
          </Styled.ExternalLink>
        </Styled.Paragraph>
        <Styled.Paragraph>
          Open Política es un colectivo que busca empoderar a las peruanas y
          peruanos transparentando la información política a través de
          herramientas digitales. Nuestro equipo está conformado por personas
          dedicadas en proveer a las y los peruanos información transparente,
          confiable y de calidad.
        </Styled.Paragraph>
        <Styled.Paragraph>
          Los datos de hojas de vida de las y los candidatos, presentados en la
          plataforma web de votu.pe, provienen de fuentes públicas,
          específicamente del{' '}
          <strong>
            Jurado Nacional de Elecciones{' '}
            <Styled.ExternalLink
              href="https://declara.jne.gob.pe"
              target="_blank">
              (JNE)
            </Styled.ExternalLink>
            , el Poder Judicial y el Diario El Comercio{' '}
            <Styled.ExternalLink
              href="https://especiales.elcomercio.pe/?q=especiales/elecciones-2021-lista-candidatos-presidencia-congreso-parlamento-andino-tu-decides-nndd-ecvisual-ecpm/comparativo-lima.html"
              target="_blank">
              (El Comercio)
            </Styled.ExternalLink>
          </strong>
          . Asimismo, para determinar el tipo de experiencia laboral, realizamos
          un análisis de identificadores de palabras.
        </Styled.Paragraph>
        <Styled.Paragraph>
          En el caso del cuestionario de propuestas, se incluyó en el análisis a
          los 10 candidatos presidenciales con mayor intención de voto
          presidencial según las últimas 3 encuestas publicadas al 10 de marzo
          de 2021, específicamente:{' '}
          <strong>
            <Styled.ExternalLink
              href="https://www.cpi.pe/images/upload/paginaweb/archivo/23/op_nac_inf_febrero2021.pdf"
              target="_blank">
              CPI (Campo 17-19 de febrero 2021)
            </Styled.ExternalLink>{' '}
            y{' '}
            <Styled.ExternalLink
              href="https://iep.org.pe/noticias/encuesta-de-opinion-febrero-2021/"
              target="_blank">
              IEP (Campo 19 - 23 de febrero 2021)
            </Styled.ExternalLink>{' '}
            y{' '}
            <Styled.ExternalLink
              href="https://peru21.pe/politica/encuesta-datum-el-21-de-peruanos-no-sabe-por-quien-votar-para-presidente-elecciones-2021-datum-urpi-torrado-noticia/"
              target="_blank">
              DATUM (Campo 5-7 de marzo de 2021).{' '}
            </Styled.ExternalLink>
          </strong>
          En el caso haya un cambio en la lista de los 10 hasta marzo 2021, se
          agregará al candidato adicional. La fuente principal de información
          fueron los planes de gobierno presentados por los partidos políticos
          ante el Jurado Nacional de Elecciones y disponibles{' '}
          <Styled.ExternalLink
            href="https://drive.google.com/drive/folders/1RiqHdqcj5McYOyFilHZiLQuyLUIvhI0w"
            tar="_blank">
            aquí
          </Styled.ExternalLink>
          . Adicionalmente, la información se completó con entrevistas en casos
          específicos para establecer:
          <Styled.InfoList type="i">
            <li>
              Postura del candidato presidencial sobre la vacancia presidencial
              del 9 de noviembre de 2021;
            </li>
            <li>
              Postura del candidato presidencial sobre la discriminalización de
              causales de aborto y matrimonio civil o igualitario, siempre que
              no esté explícita la postura del partido en el plan de gobierno;
            </li>
            <li>
              Para revisar la postura del partido sobre un tema que requirió
              mayor aclaración sobre el contenido en el plan de gobierno.
            </li>
          </Styled.InfoList>
        </Styled.Paragraph>
        <Styled.Paragraph>
          En Open Política priorizamos la seguridad de datos de nuestros
          usuarios. Por eso, en Votu no almacenamos ni queremos almacenar de
          ninguna forma las opciones marcadas como favoritas de los usuarios ni
          asociamos direcciones de IP a los mismos. Las selecciones de los
          usuarios se guardan de manera directa en el navegador del usuario y
          VOTU no tiene manera de enterarse de su selección.
        </Styled.Paragraph>
        <Styled.Paragraph>
          Debido a la continua actualización de los datos que varía de acuerdo a
          cada fuente, los cambios en las fuentes oficiales pueden tardar unos
          días en ser actualizados en nuestra página web votu.pe. En caso
          encuentres algún error en la plataforma web votu.pe, o tienes alguna
          sugerencia, puedes comunicarte con nosotros a{' '}
          <Styled.ExternalLink href="mailto:  openpoliticaperu@gmail.com?subject = Feedback&body = Message">
            openpoliticaperu@gmail.com
          </Styled.ExternalLink>
          .
        </Styled.Paragraph>
        <Styled.Paragraph>El Equipo de Open Política </Styled.Paragraph>
      </Styled.Content>
      <Footer />
    </Styled.Container>
  );
}
