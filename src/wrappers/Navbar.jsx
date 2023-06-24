import styled from "styled-components";
const Wrapper = styled.div`
  background-color: #fff;
  min-height: 150px;
  .nav-center {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo-text {
    display: none;
    @media screen and (min-width: 992px) {
      display: block;
    }
  }
  .logo {
    display: block;
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
  .toggle-btn {
    font-size: 2rem;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: var(--btn-color);
  }
  .btn-container {
    position: relative;
  }
  .dropdown-btn {
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    background-color: var(--bgc-color);
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }
  .dropdown {
    display: none;
  }
  .show-dropdown {
    display: block;
  }
`;
export default Wrapper;
