import * as Styled from './styles';

export default function Footer() {
  return (
    <Styled.FooterContent>
      <Styled.TextCopyright>
        Copyright © 2020 Open Política. Todos los derechos reservados.
      </Styled.TextCopyright>
      <Styled.WriteUs> Escríbenos</Styled.WriteUs>
      <Styled.WriteUsEmail href="mailto: hola@openpolitica.com?subject = Feedback&body = Message">
        hola@openpolitica.com
      </Styled.WriteUsEmail>
      <Styled.BoxSocialMedia>
        <Styled.SocialMediaList>
          <a href="http://facebook.com/" target="_blank">
            <img src="../images/icons/facebook.svg" alt="logo facebook" />
          </a>
        </Styled.SocialMediaList>
        <Styled.SocialMediaList>
          <a href="http://twitter.com/openpolitica" target="_blank">
            <img src="../images/icons/twitter.svg" alt="logo twitter" />
          </a>
        </Styled.SocialMediaList>
        <Styled.SocialMediaList>
          <a href="http://instagram.com/open.politica" target="_blank">
            <img src="../images/icons/instagram.svg" alt="logo instagram" />
          </a>
        </Styled.SocialMediaList>
      </Styled.BoxSocialMedia>
    </Styled.FooterContent>
  );
}
