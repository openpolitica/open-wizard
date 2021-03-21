import * as Styled from './styles';
import Header from 'components/Header';
import { Fragment } from 'react';

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <Styled.Main>{children}</Styled.Main>
    </Fragment>
  );
}
