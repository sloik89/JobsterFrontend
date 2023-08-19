import styled from "styled-components";
const Wrapper = styled.article`
  background-color: #fff;
  padding: 3rem 2rem;
  flex: 1 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 500px;
  border-radius: 0.3rem;
  border-bottom: 5px solid ${(props) => props.color};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    color: ${(props) => props.color};
    font-size: 2.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;

    background: ${(props) => props.bcg};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${(props) => props.color};
  }
  .title {
    font-size: 1.8rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
`;
export default Wrapper;
