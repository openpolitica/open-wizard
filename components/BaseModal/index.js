import ReactDOM from 'react-dom';
import * as Styled from './styles';

const BaseModal = (props) => {
  let container;
  if (typeof window !== 'undefined') {
    if (!document.querySelector('div.modal-container')) {
      const rootContainer = document.createElement('div');
      rootContainer.classList.add('modal-container');
      const parentElem = document.querySelector('#__next');
      parentElem.prepend(rootContainer);
    }
    container = document.querySelector('div.modal-container');
  }

  return container
    ? ReactDOM.createPortal(
        <Styled.Overlay
          nextHeight={document.querySelector('#__next').offsetHeight}
          {...props}>
          <Styled.Modal {...props} />
        </Styled.Overlay>,
        container,
      )
    : null;
};

export default BaseModal;
