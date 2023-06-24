import styled from "styled-components";
const Wrapper = styled.div`
  /* max-width: var(--max-width);
  margin: 0 auto; */

  .dashboard {
    @media screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: auto 1fr;
    }
  }
`;
export default Wrapper;
