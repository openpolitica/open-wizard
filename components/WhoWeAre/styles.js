import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled('div')`
  background: #fafafa;
  font-family: 'Poppins', sans-serif;
  padding: 1rem 1.5rem 3rem;
  text-align: center;
`;

export const Main = styled('main')`
  background-color: #04102f;
  border-radius: 1rem;
  color: #fff;
  padding: 1.5rem;
  text-align: initial;
  margin-bottom: 0.875rem;
`;

export const Title = styled('h1')`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.625rem;
  margin: 0;
  max-width: 12.5rem;
`;

export const GreenSpan = styled('span')`
  color: #4eb5a2;
`;

export const Subtitle = styled('p')`
  font-size: 0.875rem;
  color: #c7cad1;
  margin: 0;
  margin-top: 0.5rem;
`;

const Section = styled('section')`
  padding: 1.5rem 1.5rem 1.875rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
`;

export const TeamSection = styled(Section)`
  border: 1px solid #e3e5e8;
  background-color: #f7f7f7;
`;

export const TitleSection = styled('h2')`
  margin: 0px;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const ListTeam = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 0px 0 -0.9375rem;
  padding: 0;
  width: calc(100% + 0.9375rem);
  & li {
    flex: 1 1 44.5%;
    list-style: none;
    max-width: 44.5%;
    margin: 1.5rem 0px 0 0.9375rem;
  }
`;

export const MentorsSection = styled(Section)`
  border: 1px solid #f9d5d5;
  background-color: #fdf4f4;
`;

export const Content200 = styled('div')`
  margin-top: 3.5rem;
`;

export const PartOfText = styled('p')`
  color: #475065;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const Image200 = (props) => (
  <Image height="116" width="116" alt="logo 200" {...props} />
);

export const Link200 = styled('a')`
  text-decoration: none;
)`;
