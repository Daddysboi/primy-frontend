import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Sidebar = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 4rem;
  height: calc(100vh - 4rem);
  width: 22%;
  padding: 2rem 3%;
  background-color: white;
  /* border: 1px solid #ededed; */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation-duration: 0.8s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      right: -60%;
    }
    to {
      right: 0%;
    }
  }
`;

const Close = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  padding: 0 0.25rem;
  cursor: pointer;
  transition: right 0.8s ease;
`;

const SideBar = ({ isOpen, hasCloseBtn = true, onClose, children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(isOpen);
  const SidebarRef = useRef(null);

  const handleCloseSidebar = () => {
    if (onClose) {
      onClose();
    }
    setSidebarOpen(false);
  };

  useEffect(() => {
    setSidebarOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} ref={SidebarRef}>
        {hasCloseBtn && (
          <Close onClick={handleCloseSidebar}>
            <FaTimes />
          </Close>
        )}
        <>{children}</>
      </Sidebar>
    </>
  );
};

export default SideBar;
