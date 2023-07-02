import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
    color: rgb(101, 101, 117);
    letter-spacing: 1px;
  }
  select {
    padding: 0.5rem;
    border: none;
    border: none;
    background-color: rgb(217, 226, 226);
  }
`;
export default Wrapper;
