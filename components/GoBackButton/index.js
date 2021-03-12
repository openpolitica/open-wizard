import * as Styled from './styles';
import Router from 'next/router';
import Image from 'next/image';

export default function GoBackButton({ text, to, ...props }) {
  const handleGoBack = () => {
    if (!to) {
      return Router.back();
    }
    return Router.push(to);
  };

  return (
    <Styled.GoBackButton onClick={handleGoBack} {...props}>
      <Styled.GoBackIcon>
        <Image src="/images/icons/back-icon.svg" width={7} height={10} />
      </Styled.GoBackIcon>
      <Styled.GobackText>{text}</Styled.GobackText>
    </Styled.GoBackButton>
  );
}
