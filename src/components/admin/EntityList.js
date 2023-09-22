import EntityItem from "./EntityItem";
import { ListHeader } from "@/shared/AdminListGenericStyles";

export default function UserList({
  entities,
  setShowDeleteMessage,
  setToDeleteEntity,
}) {
  return (
    <>
      <ListHeader>
        <p>Título</p>
        <p>Autor</p>
        <p>Data de publicação</p>
        <p>Opções</p>
      </ListHeader>
      {entities.map((entity) => {
        return (
          <EntityItem
            key={entity.id}
            entity={entity}
            setShowDeleteMessage={setShowDeleteMessage}
            setToDeleteEntity={setToDeleteEntity}
          />
        );
      })}
    </>
  );
}
