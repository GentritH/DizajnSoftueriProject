import { observer } from "mobx-react-lite";
import  { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer(function OrariDetails() {
  const { orariStore } = useStore();
  const { selectedOrari: orari, openForm, loadOrari, cancelSelectedOrari, loadingInitial } = orariStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadOrari(id);
  }, [id, loadOrari]);

  if (loadingInitial || !orari) return <LoadingComponent />;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Orari i klases:{orari.klasaId}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
          as ={Link} to={`/Stafi/manageOraret/${orari.id}`}
            onClick={() => openForm(orari.id)}
            basic
            color="blue"
            content="Edit"
          ></Button>
          <Button
            onClick={cancelSelectedOrari}
            basic
            color="grey"
            content="Cancel"
          ></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
})
