import TeamListUl from 'components/TeamCard';
import Header from 'components/Header';
import { team, mentors } from './data';
import Footer from 'components/Footer';
import * as Styled from './styles';
import { Fragment } from 'react';

export default function WhoWeAre() {
  return (
    <Fragment>
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
              <li key={team.name}>
                <TeamListUl {...team} />
              </li>
            ))}
          </Styled.ListTeam>
        </Styled.TeamSection>
        <Styled.MentorsSection>
          <Styled.TitleSection>Mentores</Styled.TitleSection>
          <Styled.ListTeam>
            {mentors.map((mentors) => (
              <li key={mentors.name}>
                <TeamListUl {...mentors} />
              </li>
            ))}
          </Styled.ListTeam>
        </Styled.MentorsSection>
        <Styled.Content200>
          <Styled.PartOfText>Fuimos parte de:</Styled.PartOfText>
          <Styled.Link200
            href="https://www.linkedin.com/company/200org/"
            target="_blank">
            <Styled.Image200 src="/images/200.png" />
          </Styled.Link200>
        </Styled.Content200>
      </Styled.Container>
      <Footer />
    </Fragment>
  );
}
