import { ViewContainer, Background } from "@/shared/ViewGenericStyles";
import ConfirmEmailMessage from "@/components/ConfirmEmailMessage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { confirmUserEmail } from "@/services/authRequisitions";
import {
  LoadingView,
  LoaderContainer,
  Loader,
} from "@/shared/ViewLoadingStyles";
import foto from "../../public/imgs/loading.svg";

export default function EmailConfirmation() {
  const [sucess, setSucess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("tk");

  const confirmEmail = async () => {
    setIsLoading(true);

    if (token !== null) {
      try {
        await confirmUserEmail(token);
        setSucess(true);
        localStorage.setItem("token", token);
      } catch (err) {
        setSucess(false);
        console.log(err);
      }

      setIsLoading(false);
    }
  };

  useEffect(() => {
    confirmEmail();
  }, [token]);

  return (
    <ViewContainer>
      <LoadingView isLoading={isLoading}>
        <LoaderContainer>
          <Loader src={foto} />
        </LoaderContainer>
      </LoadingView>
      <Background>
        <ConfirmEmailMessage sucess={sucess} />
      </Background>
    </ViewContainer>
  );
}
