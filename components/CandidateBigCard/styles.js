import styled from 'styled-components';
import Image from 'next/image';

const memberBoxPriority = {
  yellow: {
    backgroundColor: '#fcf7cf',
    color: '#82792D',
  },
  green: {
    backgroundColor: '#CEE6E1',
    color: '#0F6D5B',
  },
};

const starPriority = {
  favorite: {
    background: 'url("/images/icons/starGreen.svg") no-repeat center',
  },
  notFavorite: {
    background: 'url("/images/icons/starPlain.svg") no-repeat center',
  },
};

export const PartyIcon = styled(Image).attrs((props) => ({
  height: 32,
  width: 32,
}))`
  border: 1px solid #c7cad1;
  border-radius: 2px;
`;

export const NumberIcon = styled('span')`
  border: 1px solid #c7cad1;
  border-radius: 2px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  height: 2rem;
  line-height 2rem;
  margin-left: 0.2rem;
  text-align: center;
  width: 2rem;
`;

export const ProfileIcon = styled('img')`
  height: 6.25rem;
  width: 4.438rem;
`;

export const Fullname = styled('p')`
  color: #475065;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0 0 0.1rem 0;
`;

export const Card = styled('div')`
  align-items: flex-start;
  background-color: white;
  border: 1px solid #e3e5e8;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(71, 80, 101, 0.12);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0.875rem;
  position: relative;
  width: 20.5rem;
`;

export const Star = styled('div')`
  background: ${(props) =>
    starPriority[props.type || 'notFavorite'].background};
  cursor: pointer;
  height: 2rem;
  position: absolute;
  right: 1rem;
  width: 2rem;
`;

export const Row = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-direction: row;
`;

export const RowBorderUp = styled(Row)`
  align-items: center;
  border-top: 1px solid #e3e5e8;
  padding: 0.5rem 0;
`;

export const MainRow = styled(Row)`
  align-items: flex-end;
  flex: 0 0 100%;
  padding: 0.5rem 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentColumn = styled(Column)`
  padding: 0 0.4rem 0 0.4rem;
`;

export const MemberBox = styled.div`
  background-color: ${(props) =>
    memberBoxPriority[props.type || 'green'].backgroundColor};
  border-radius: 4px;
  color: ${(props) => memberBoxPriority[props.type || 'green'].color};
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  padding: 0.6rem 0.9rem;
`;

export const Subtitle = styled('h3')`
  color: #8e94a4;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7875rem;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0;
  margin-bottom: 0.2rem;
`;

export const SocialTwitterIcon = styled('img')`
  height: 1rem;
  margin-left: 1rem;
  width: 1.25rem;
`;

export const SocialFacebookIcon = styled('img')`
  height: 1rem;
  margin-left: 1rem;
  width: 0.55rem;
`;

export const SocialLink = styled('a')`
  text-decoration: none;
)`;
