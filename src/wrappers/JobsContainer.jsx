import styled from "styled-components";
const Wrapper = styled.div`
  margin: 2rem;
  .jobs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }
  .jobs > * {
    max-width: 600px;
  }
`;
export default Wrapper;
