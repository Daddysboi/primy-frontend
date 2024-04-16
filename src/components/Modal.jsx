import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    overflow: hidden;
`;

const Dialog = styled.dialog`
  position: fixed;
  border: 0;
  top: 0;
  bottom: 0;
  right: -80%;
  width: 300px;
  height: 100%;
  background-color: white;
  z-index: 1;
  transition: right 5s ease;
  &::backdrop {
    background: hsl(0 0% 0% / 50%);
  }
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 3rem;
  background: #e8e8e8;
  border: none;
  padding: 0 0.25rem;
  cursor: pointer;
`;

const Children = styled.div`
  padding: 20px;
`;

const Modal = ({ isOpen, hasCloseBtn = true, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
        document.body.classList.add("modal-open");
      } else {
        modalElement.close();
        document.body.classList.remove("modal-open");
      }
    }
  }, [isModalOpen]);

  return (
    <>
      <GlobalStyles />
      <Dialog ref={modalRef} onKeyDown={handleKeyDown}>
        {hasCloseBtn && (
          <Close onClick={handleCloseModal}>
            <FaTimes />
          </Close>
        )}
        <Children>{children}</Children>
      </Dialog>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  hasCloseBtn: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
};

export default Modal;
