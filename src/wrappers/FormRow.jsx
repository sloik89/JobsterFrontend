import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    font-size: 1.2rem;
    font-weight: bold;
    color: #656575;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  input {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #cae0e0;
    border-radius: 5px;
  }
  input:focus {
    outline: none;
  }
`;
export default Wrapper;
