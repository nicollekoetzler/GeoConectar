import styled from "@emotion/styled";
import Image from "next/image";

export const LoadingView = styled.div`
  font-family: "Roboto";
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: ${({ isLoading }) => (isLoading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

export const LoaderContainer = styled.div`
  padding: 50px 0;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #cdcdcd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled(Image)`
  height: 50px;
`;
