import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NotLoggedMessage() {
  const router = useRouter();
  const [ visible, setVisible ] = useState(false);

  function showNotLoggedMessge() {
    const token = localStorage.getItem("token");
    const currentRoute = router.pathname;

    if(!token && currentRoute !== "/signin" && currentRoute !== "/signup" && currentRoute !== "/") {
      setVisible(true);
    }
  }

  function handleClick() {
    router.push("/signin");
    setVisible(false);
  }

  useEffect(showNotLoggedMessge, [router]);

  return (
    <NotLoggedView visible={ visible }>
      <NotLoggedContainer>
        <h4>Sua sessão não foi iniciada ou expirou</h4>
        <RedirectLoginButton onClick={  handleClick }>Ir para o login</RedirectLoginButton>
      </NotLoggedContainer>
    </NotLoggedView>  
  );
}

const NotLoggedView = styled.div`
  font-family: "Roboto";
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: ${({visible}) => visible ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  background-color: #EEEEEE;
`;

const NotLoggedContainer = styled.div`
  margin: 0 20px;
  padding: 50px 30px;
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 32px;
  }
`;

const RedirectLoginButton = styled.button`
  width: 326px;
  height: 42px;
  background: #a5b167;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
