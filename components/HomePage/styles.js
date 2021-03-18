import styled from 'styled-components';
import BaseButton from 'components/BaseButton';

export const Container = styled.div`
  background: #fff;
  font-family: 'Poppins', sans-serif;
`;

export const Hero = styled.main`
  position: relative;
`;

export const TextContent = styled.div`
  background: #ecf4f3;
  padding: 40px 24px 1px 24px;
`;

export const Title = styled.h1`
  color: #04102f;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 0 42px 0 0;
`;

export const Span = styled.span`
  color: #4eb5a2;
`;

export const Paragraph = styled.p`
  line-height: 18px;
  color: #475065;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ContentButtonCandidate = styled.div`
  background: linear-gradient(to bottom, #ecf4f3 50%, #fff 50%);
  display: flex;
  margin: 0px -13px 0px 0px;
  padding: 0px 24px;
  width: 100%;
`;

export const FindMyCandidateButton = styled('button')`
  background: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin: 0px 13px 0px 0px;
  max-width: 157px;
  padding: 12px 12px 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export const TextButton = styled.p`
  color: #475065;
  margin: 4px 0px 0px;
`;

export const SpanCandidate = styled.span`
  font-weight: bold;
`;

export const InfoSection = styled.div`
  padding: 60px 24px 41px;
`;

export const InfoText = styled.p`
  color: #04102f;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  max-width: 65%;
  margin-top: 0;
  margin-bottom: 32px;
`;

export const BoxLogo = styled.div`
  align-items: center;
  display: flex;
  img {
    margin-right: 8px;
  }
`;

export const InfoCard = styled.div`
  position: relative;
  background-color: #04102f;
  border-radius: 16px;
  padding: 51px 20px 37px 24px;
  color: #fff;
  margin-top: 138px;
`;

export const BackgroundDirections = styled.div`
  position: absolute;
  top: -115px;
`;

export const TitleInfoCard = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 19px;
  line-height: 26px;
  margin: 0;
  margin-bottom: 16px;
`;

export const SubtitleInfoCard = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  margin-bottom: 8px;
`;
// check section
export const CheckText = styled.p`
  font-weight: normal;
  margin: 0;
  margin-left: 8px;
  font-size: 14px;
`;

export const WrapperCheckLabel = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

export const ButtonStart = styled(BaseButton)`
  margin-top: 16px;
`;

export const FooterContent = styled.footer`
  background-color: #4eb5a2;
  color: #fff;
  padding: 40px 24px;
  font-family: Roboto;
`;

export const TextCopyright = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`;

export const WriteUs = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const WriteUsEmail = styled.a`
  color: #fff;
  opacity: 0.6;
  font-size: 18px;
`;

export const BoxSocialMedia = styled.ul`
  display: flex;
  margin: 0;
  margin-top: 24px;
  align-items: center;
  padding-left: 0;
`;

export const SocialMediaList = styled.li`
  list-style: none;
  margin-right: 16px;
`;
