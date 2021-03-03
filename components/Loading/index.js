import { useEffect, useState } from 'react';
import * as Styled from './styles';

const Loading = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldProgress) => {
        const newProgress = oldProgress + 40;

        if (newProgress === 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styled.Loading>
      <Styled.Loader src="../images/icons/loader.svg" />
      <Styled.Progress value={value} />
    </Styled.Loading>
  );
};

export default Loading;
