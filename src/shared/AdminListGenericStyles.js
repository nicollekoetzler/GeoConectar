import styled from "@emotion/styled";

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;

  p {
    width: 100%;
    overflow-x: hidden;
  }
`;

const EntityBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1em;
  font-size: 16px;

  p {
    color: #1e1e1e;
    font-weight: 500;
    width: 100%;
    overflow-x: hidden;
    padding: 0 4px 0 0;
  }
`;

export { ListHeader, EntityBox };
