import TeamListUl from 'components/TeamCard';
import Header from 'components/Header';
import { team, collaborators, mentors } from './data';
import Footer from 'components/Footer';
import * as Styled from './styles';
import Image from 'next/image';

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
        <Styled.CollaboratorsSection>
          <Styled.TitleCollaborators>Colaboradoras</Styled.TitleCollaborators>
          <Styled.ListTeam>
            {collaborators.map((collaborators) => (
              <li>
                <TeamListUl key={collaborators} {...collaborators} />
              </li>
            ))}
          </Styled.ListTeam>
        </Styled.CollaboratorsSection>
        <Styled.MentorsSection>
          <Styled.TitleSection>Mentores</Styled.TitleSection>
          <Styled.ListTeam>
            {mentors.map((mentors) => (
              <li>
                <TeamListUl key={mentors} {...mentors} />
              </li>
            ))}
          </Styled.ListTeam>
        </Styled.MentorsSection>
        <div style={{ marginTop: '56px' }}>
          <Styled.PartOfText>Fuimos parte de:</Styled.PartOfText>
          <Image src="/images/200.png" width={116} height={116} />
        </div>
      </Styled.Container>
      <Footer />
    </>
  );
}
