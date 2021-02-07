import styled from 'styled-components';

export const AccordionIcon = styled('div')`
  background: ${(props) =>
    `url('/images/icons/${props.icon}.svg') no-repeat center` ||
    'url("/images/icons/place.svg") no-repeat center'};
  height: 1.5rem;
  width: 1.5rem;
`;

export const Title = styled('h3')`
  color: #475065;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7875rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0 0.5rem;
`;

export const Card = styled('div')`
  align-items: flex-start;
  background-color: white;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  // height: 4.2rem;
  justify-content: flex-start;
  padding: 0.875rem;
  position: relative;
  width: 20.5rem;
`;

export const TitleRow = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 0 0 100%;
  flex-direction: 'row';
`;

export const ContentRow = styled.div`
  align-items: flex-end;
  border-top: 1px solid #e3e4e8;
  display: flex;
  flex: 0 0 100%;
  flex-direction: 'row';
  margin-top: 0.4rem;
`;

export const ContentText = styled.div`
  color: #8e94a4;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7875rem;
  line-height: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: 'row';
`;

export const Chevron = styled('div')`
  background: ${(props) =>
    `url('/images/icons/${props.direction}.svg') no-repeat center` ||
    'url("/images/icons/chevronDown.svg") no-repeat center'};
  height: 1.5rem;
  position: absolute;
  right: 1rem;
  width: 1.5rem;
`;
