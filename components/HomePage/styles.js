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
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
`;

export const TextContent2 = styled(TextContent)`
  background: #fff;
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
  color: #475065;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.125rem;
  margin-bottom: 1.5rem;
`;

export const ButtonsScroll = styled('div')`
  background: linear-gradient(to bottom, #ecf4f3 50%, #fff 50%);
  overflow-x: auto;
  padding-left: 1.3rem;
`;

export const ButtonsRow = styled('div')`
  column-gap: 0.8125rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(8.875rem, 9.8125rem));
  &:after {
    content: '';
    height: 0.3rem;
    padding-left: 0.4rem;
    right: 0;
    width: 0;
  }
`;

export const InfoText = styled('p')`
  color: #04102f;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 0;
  max-width: 88%;
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
  align-self: center;
  display: flex;
`;

export const LogoText = styled('p')`
  color: #8e94a4;
  font-size: 0.575rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const InfoCard = styled('div')`
  background-color: #04102f;
  border-radius: 1rem;
  color: #fff;
  margin-top: 5rem;
  padding: 2.5rem 1.5rem;
  position: relative;
`;

export const BackgroundDirections = styled('div')`
  position: absolute;
  right: -1.53125rem;
  top: -5.75rem;
`;

export const TitleInfoCard = styled('p')`
  color: #fff;
  font-size: 1.1875rem;
  font-weight: 600;
  line-height: 1.625rem;
  margin: 0;
  margin-bottom: 1rem;
`;

export const SubtitleInfoCard = styled('p')`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
`;
// check section
export const CheckText = styled('p')`
  font-size: 0.875rem;
  font-weight: normal;
  margin: 0;
  margin-left: 0.5rem;
`;

export const WrapperCheckLabel = styled('div')`
  display: flex;
  margin-bottom: 0.25rem;
`;
