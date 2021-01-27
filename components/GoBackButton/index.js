import * as Styled from './styles';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function GoBackButton({ text, route }) {
  const router = useRouter();

  const handleGoBack = () => {
    if (router.push(!route)) {
      return router.back();
    }
  };

  return (
    <Styled.GoBackButton onClick={handleGoBack}>
      <Styled.GoBackIcon>
        <Image src="/images/icons/backIcon.svg" width={7} height={10} />
      </Styled.GoBackIcon>
      <Styled.GobackText>{text}</Styled.GobackText>
    </Styled.GoBackButton>
  );
}
