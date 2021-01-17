import styled from 'styled-components';

import BaseButton from 'components/BaseButton';

export const Container = styled.div`
  background: white;
  font-family: Poppins;
`;

export const Hero = styled.main`
  background: #ecf4f3;
  padding: 40px 24px 141px 24px;
  position: relative;
`;

export const Welcome = styled.div`
  background: #ecf4f3;
  padding: 40px 24px 141px 24px;
`;

export const BackgrounHero = styled.div`
  position: absolute;
  right: 0;
  bottom: -53px;
`;

export const Title = styled.h1`
  color: #04102f;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
  margin-right: 42px;
`;

export const Span = styled.span`
  color: #4eb5a2;
  
}
`;

export const Paragraph = styled.p`
  line-height: 18px;
  color: #475065;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 24px;
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
  display: flex;
  align-items: center;
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
