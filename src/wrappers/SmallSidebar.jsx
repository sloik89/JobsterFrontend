import styled from "styled-components";
const Wrapper = styled.div`
  display: block;
  @media screen and (min-width: 992px) {
    display: none;
  }
  .close-btn {
    color: #881515;
    font-size: 2.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .sidebar-container {
    position: absolute;
    width: 100%;
    z-index: 1;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
  }
  .show-sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    background-color: #fff;
    width: 90%;
    min-height: 90%;
    border-radius: 1rem;
    padding: 1rem;
  }
`;
export default Wrapper;
