import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--max-width);
  margin: 0 auto;
  .form {
    background-color: white;
    width: 90%;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    justify-content: center;
    gap: 1rem;
  }
  h3 {
    align-self: center;
    font-size: 3rem;
    color: var(--text-color);
    margin: 1rem 0;
  }
  .btn {
    margin: 1rem 0;
  }
  .logo {
    max-width: 200px;
    align-self: center;
  }
  p {
    align-self: center;
    button {
      font-size: 1.2rem;
      cursor: pointer;
      border: none;
      background-color: transparent;
      padding-left: 0.5rem;
      letter-spacing: 1px;
      font-weight: bold;
      color: var(--text-color);
    }
  }
`;
export default Wrapper;
