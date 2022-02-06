// 1. import statements
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

// the wrapper component
const StyledModalWrapper = styled.div`
  width: 25rem;
  height: 35rem;
`;

const StyledModal = styled.div`
  background: ${globalVariables.colours.divBackground};
  height: 100%;
  width: 100%;
  border-radius: 30px;
  padding: 15px;
  box-shadow: 0 0 10px lightgrey;
`;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(5px);
`;

const Modal = ({ onClose, children }) => {
  // create ref for the StyledModalWrapper component
  const modalWrapperRef = useRef();

  // check if the user has clicked inside or outside the modal
  const backDropHandler = (e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // attach event listener to the whole windor with our handler
    window.addEventListener('click', backDropHandler);

    // remove the event listener when the modal is closed
    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <StyledModalOverlay>
      {/* Wrap the whole Modal inside the newly created StyledModalWrapper 
            and use the ref
        */}
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </StyledModalHeader>
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  );

  return modalContent;
};

export default Modal;
