import styled from 'styled-components';

export const Container = styled('div')`
  background: #fff;
  font-family: 'Poppins', sans-serif;
`;

export const Hero = styled('main')`
  position: relative;
`;

export const TextContent = styled('div')`
  background: #ecf4f3;
  padding: 2.5rem 1.5rem 0.0625rem 1.5rem;
`;

export const Title = styled('h1')`
  color: #04102f;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
`;

export const Emphasis = styled('span')`
  color: #4eb5a2;
`;

export const Paragraph = styled('p')`
  line-height: 1.125rem;
  color: #475065;
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

export const ButtonsRow = styled('div')`
  background: linear-gradient(to bottom, #ecf4f3 50%, #fff 50%);
  display: grid;
  padding: 0 1.5rem;
  grid-template-columns: repeat(2, minmax(9.375rem, 9.8125rem));
  column-gap: 13px;
`;

export const FindMyCandidateButton = styled('button')`
  background: #fff;
  border: none;
  border-radius: 0.3125rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.12);
  cursor: pointer;
  max-width: 9.8125rem;
  padding: 0.75rem 0.75rem 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonText = styled('p')`
  color: #04102f;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.3125rem;
  margin: 0.25rem 0 0;
`;

export const SpanBlack = styled('span')`
  font-weight: bold;
`;

export const InfoSection = styled('div')`
  padding: 3.75rem 1.5rem 2.5rem;
`;

export const InfoText = styled('p')`
  color: #04102f;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5rem;
  max-width: 88%;
  margin-top: 0;
  margin-bottom: 2rem;
`;

export const BoxLogo = styled('div')`
  display: flex;
  flex-direction: row;
  padding-bottom: 1.2rem;
`;

export const LogoDiv = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 0.75rem;
`;

export const LogoImage = styled('div')`
  display: flex;
  align-self: center;
`;

export const LogoText = styled('p')`
  color: #8e94a4;
  font-weight: 600;
  font-size: 0.575rem;
  margin: 0;
  text-align: center;
`;

export const InfoCard = styled('div')`
  position: relative;
  background-color: #04102f;
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  color: #fff;
  margin-top: 5rem;
`;

export const BackgroundDirections = styled('div')`
  position: absolute;
  top: -5.75rem;
  right: -1.53125rem;
`;

export const TitleInfoCard = styled('p')`
  color: #fff;
  font-weight: 600;
  font-size: 1.1875rem;
  line-height: 1.625rem;
  margin: 0;
  margin-bottom: 1rem;
`;

export const SubtitleInfoCard = styled('p')`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;
// check section
export const CheckText = styled('p')`
  font-weight: normal;
  margin: 0;
  margin-left: 0.5rem;
  font-size: 0.875rem;
`;

export const WrapperCheckLabel = styled('div')`
  display: flex;
  margin-bottom: 0.25rem;
`;
