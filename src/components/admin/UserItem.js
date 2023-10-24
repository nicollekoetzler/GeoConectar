import { formatDate } from "@/services/dateFormater";
import { EntityBox } from "@/shared/AdminListGenericStyles";

export default function UserItem({
  user,
  setShowDeleteMessage,
  setToDeleteEntity,
}) {
  const handleClick = () => {
    setToDeleteEntity(user.id);
    setShowDeleteMessage(true);
  };

  return (
    <EntityBox>
      <p>{user.name}</p>
      <p>{formatDate(user.createdAt, "abbrev-month")}</p>
      <p onClick={handleClick} style={{ cursor: "pointer" }}>
        Excluir
      </p>
    </EntityBox>
  );
}
