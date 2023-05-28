import styled from "styled-components";
const Wrapper = styled.main`
  padding: 1rem;
  nav {
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 3rem;
    margin: 0;
    span {
      color: #5454a1;
    }
  }
  .main-img {
    display: none;
  }
  @media screen and (min-width: 992px) {
    .main-img {
      display: block;
    }
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
`;
export default Wrapper;
