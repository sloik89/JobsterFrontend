import styled from "styled-components";
const Wrapper = styled.div`
  background-color: #fff;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  @media screen and (min-width: 700px) {
    flex: 1 1 calc(50% - 2rem);
  }
  @media screen and (min-width: 1400px) {
    flex: 1 1 calc(30% - 2rem);
  }
  header {
    display: flex;
    align-items: center;
    gap: 1rem;
    .info {
      h5 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  .main-icon {
    font-size: 3rem;
    text-transform: uppercase;
    background-color: blue;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 10px;
  }
  .content {
    display: flex;
    .content-center {
      margin: 1rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      letter-spacing: 1px;
      font-size: 1.1rem;
      color: #8a8a7e;
      .status {
        padding: 0.8rem 0.5rem;
        border-radius: 5px;
      }
      .pending {
        background-color: #dddda4;
      }
      .interview {
        background-color: #9e9eda;
        color: blue;
      }
      .declined {
        background-color: #eea6a6;
        color: black;
      }
    }
  }
  footer {
    display: flex;
    gap: 2rem;
  }
`;
export default Wrapper;
