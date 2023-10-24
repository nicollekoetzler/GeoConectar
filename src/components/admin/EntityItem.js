import { formatDate } from "@/services/dateFormater";
import { EntityBox } from "@/shared/AdminListGenericStyles";

export default function EntityItem({
  entity,
  setShowDeleteMessage,
  setToDeleteEntity,
}) {
  const handleClick = () => {
    setToDeleteEntity(entity.id);
    setShowDeleteMessage(true);
  };

  return (
    <EntityBox>
      <p>{entity.title}</p>
      <p>{entity.user?.name}</p>
      <p>{formatDate(entity.createdAt, "abbrev-month")}</p>
      <p onClick={handleClick} style={{ cursor: "pointer" }}>
        Excluir
      </p>
    </EntityBox>
  );
}
