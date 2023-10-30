import styled from "@emotion/styled";

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
  color: #a4a4a4;

  p {
    width: 100%;
    overflow-x: hidden;
    color: #9e9e9e;
  }

  @media screen and (max-width: 700px) {
    p {
      padding: 0 8px;
    }
  }
`;

const EntityBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1em;
  font-size: 16px;
  padding-bottom: 6px;
  border-bottom: solid 1px #cdcdcd;

  p {
    color: #1e1e1e;
    font-weight: 300;
    width: 100%;
    overflow-x: hidden;
    padding: 0 4px 0 0;
  }

  p:last-of-type {
    color: #1e1e1e;
    font-weight: 500;
    width: 100%;
    overflow-x: hidden;
    padding: 0 4px 0 0;
  }

  @media screen and (max-width: 700px) {
    p {
      padding: 0 8px;
    }
  }
`;

export { ListHeader, EntityBox };
