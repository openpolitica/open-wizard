import styled from 'styled-components';

export const Loading = styled('div')`
  progress[value] {
    appearance: none;

    ::-webkit-progress-bar {
      background-color: #fff;
      border: 1px solid #e3e5e8;
      border-radius: 1.25rem;
      height: 0.5rem;
    }

    ::-webkit-progress-value {
      background-color: #04102f;
      border-radius: 1.25rem;
      height: 0.375rem;
    }
  }

  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const Loader = styled('img')`
  margin: 0 auto 1.5rem;
  width: 11.125rem;
`;

export const Progress = (props) => <progress value={props.value} max="100" />;
