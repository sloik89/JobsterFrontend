import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    align-items: center;
    color: var(--text-color);
    font-size: 1.5rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    width: 200px;
  }
  a:hover {
    color: var(--btn-color);
  }
  a.active {
    color: var(--btn-color);
  }
`;
export default Wrapper;
