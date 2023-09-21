import AdminView from "@/components/admin/AdminView";
import BottomLayout from "@/layouts/Bottom";
import HeaderLayout from "@/layouts/Header";
import { Background, ViewContainer } from "@/shared/ViewGenericStyles";

export default function Management() {
  return (
    <>
      <ViewContainer>
        <HeaderLayout />
        <Background>
          <AdminView />
        </Background>
        <BottomLayout />
      </ViewContainer>
    </>
  );
}
