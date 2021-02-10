import styled from 'styled-components';

export const Modal = styled('section').attrs((props) => ({
  style: {
    top: props.isOpen ? '2rem' : '0',
  },
}))`
  background: white;
  border: 1px solid #f1f2f3;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  height: 90vh;
  left: 50%;
  overflow: scroll;
  position: absolute;
  transition: all linear 0.3s;
  transform: translateX(-50%);
  width: 20.5rem;
`;

export const ModalContainer = styled('div').attrs((props) => ({
  style: {
    height: props.isOpen ? '100vh' : '0',
    opacity: props.isOpen ? '1' : '0',
    zIndex: props.isOpen ? '10' : '-1',
  },
}))`
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  width: 100vw;
`;
