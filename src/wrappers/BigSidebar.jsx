import styled from "styled-components";
const Wrapper = styled.div`
  display: none;
  background-color: #fff;
  height: 100vh;

  @media screen and (min-width: 992px) {
    display: block;
  }

  .sidebar-container {
    width: 0;
    transition: all 0.2s linear;
    overflow: hidden;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
  }
  .sidebar-container.show-sidebar {
    width: 300px;
  }
`;
export default Wrapper;
