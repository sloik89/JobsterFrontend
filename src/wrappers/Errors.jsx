import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  img {
    width: 100%;
    max-width: 700px;
  }
  h3 {
    font-size: 2rem;
    text-transform: capitalize;
    margin-top: 1rem;
  }
`;
export default Wrapper;
