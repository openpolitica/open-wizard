import styled from 'styled-components';

export const FooterContent = styled('footer')`
  background-color: #4eb5a2;
  color: #fff;
  padding: 2.5rem 1.5rem;
  font-family: Roboto;
  width: 100%;
`;

export const TextCopyright = styled('p')`
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin: 0;
`;

export const TextLinks = styled('p')`
  font-weight: bold;
  font-size: 1.125rem;
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const AboutUsLink = styled(TextCopyright)`
  & a {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const AboutTheProjectLink = styled(AboutUsLink)`
  margin-top: 0.5rem;
`;

export const WriteUs = styled('p')`
  font-weight: bold;
  font-size: 1.125rem;
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const WriteUsEmail = styled('a')`
  color: #fff;
  opacity: 0.6;
  font-size: 1.125rem;
`;

export const BoxSocialMedia = styled('ul')`
  display: flex;
  margin: 0;
  margin-top: 1.5rem;
  align-items: center;
  padding-left: 0;
`;

export const SocialMediaList = styled('li')`
  list-style: none;
  margin-right: 1rem;
`;
