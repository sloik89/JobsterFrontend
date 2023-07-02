import styled from "styled-components";
const Wrapper = styled.div`
  margin: 2rem;
  background-color: #fff;
  padding: 2rem;
  h3 {
    font-size: 3rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }
  .form-center {
    display: flex;
    gap: 1rem;
    max-width: 900px;
    flex-direction: column;
    margin: 0 auto;
  }
  .btn-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
export default Wrapper;
