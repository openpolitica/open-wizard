import * as Styled from './styles';
import Link from 'next/link';

export default function Footer() {
  return (
    <Styled.FooterContent>
      <Styled.TextCopyright>
        Copyright © 2020 Open Política. Todos los derechos reservados.
      </Styled.TextCopyright>
      <Styled.TextLinks> Enlaces</Styled.TextLinks>
      <Styled.AboutUsLink>
        <Link href="/who-we-are">Acerca de Nosotros</Link>
      </Styled.AboutUsLink>
      <Styled.AboutTheProjectLink>
        <Link href="/about">Sobre el proyecto</Link>
      </Styled.AboutTheProjectLink>
      <Styled.WriteUs> Escríbenos</Styled.WriteUs>
      <Styled.WriteUsEmail href="mailto:  hola@votu.pe?subject = Feedback&body = Message">
        hola@votu.pe
      </Styled.WriteUsEmail>
      <Styled.BoxSocialMedia>
        <Styled.SocialMediaList>
          <a
            href=" https://www.facebook.com/votu.pe/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="../images/icons/facebook.svg" alt="logo facebook" />
          </a>
        </Styled.SocialMediaList>
        <Styled.SocialMediaList>
          <a
            href="https://twitter.com/votupe"
            target="_blank"
            rel="noopener noreferrer">
            <img src="../images/icons/twitter.svg" alt="logo twitter" />
          </a>
        </Styled.SocialMediaList>
        <Styled.SocialMediaList>
          <a
            href="https://www.instagram.com/votu.pe/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="../images/icons/instagram.svg" alt="logo instagram" />
          </a>
        </Styled.SocialMediaList>
      </Styled.BoxSocialMedia>
    </Styled.FooterContent>
  );
}
