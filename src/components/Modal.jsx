import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Dialog = styled.dialog`
  border: 0;
  top: -3rem;
  width: 300px;
  background-color: white;
  transition: right 5s ease;
  border-radius: 1rem;
  padding: 1rem;
  &::backdrop {
    background: hsl(0 0% 0% / 50%);
  }
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 3rem;
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
