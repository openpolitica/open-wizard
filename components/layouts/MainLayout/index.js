import * as Styled from './styles';
import Header from 'components/Header';

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <Styled.Main>{children}</Styled.Main>
    </div>
  );
}
