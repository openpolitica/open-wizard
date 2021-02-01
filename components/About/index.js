import TeamListUl from 'components/TeamCard';
import Header from 'components/Header';
import { team, collaborators, mentors } from './data';
import Footer from 'components/Footer';
import * as Styled from './styles';
import Link from 'next/link';
import styled from 'styled-components';

export default function About() {
  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Main>
          <Styled.Title>
            Votu fue creado por{' '}
            <Styled.GreenSpan>Open Política.</Styled.GreenSpan>
          </Styled.Title>
          <Styled.Subtitle>
            Transparentamos la información política en el Perú.
          </Styled.Subtitle>
        </Styled.Main>
        <Styled.TeamSection>
          <Styled.TitleSection>El equipo</Styled.TitleSection>
          <Styled.ListTeam>
            {team.map((team) => (
              <li>
                <TeamListUl key={team.name} {...team} />
              </li>
            ))}
          </Styled.ListTeam>
        </Styled.TeamSection>
        <Styled.MentorsSection>
          <Styled.TitleSection>Mentores</Styled.TitleSection>
          <Styled.ListTeam>
            {mentors.map((mentors) => (
              <li>
                <TeamListUl key={mentors.name} {...mentors} />
              </li>
            ))}
          </Styled.ListTeam>
        </Styled.MentorsSection>
        <div style={{ marginTop: '56px' }}>
          <Styled.PartOfText>Fuimos parte de:</Styled.PartOfText>
          <Styled.Link
            href="https://www.linkedin.com/company/200org/"
            target="_blank">
            <Styled.Image200
              src="/images/200.png"
              width={116}
              height={116}
              alt="logo 200"
            />
          </Styled.Link>
        </div>
      </Styled.Container>
      <Footer />
    </>
  );
}
