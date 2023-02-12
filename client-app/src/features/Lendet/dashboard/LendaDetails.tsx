import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function LendaDetails() {
    const { lendaStore} = useStore();
    const { selectedLenda: lenda, loadLenda, loadingInitial, openForm, cancelSelectedLenda} = lendaStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadLenda(id);
    }, [id, loadLenda]);

    if(loadingInitial || !lenda) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{lenda.emriLendes}</Card.Header>
                <Card.Description>
                   {lenda.pershkrimi}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button as ={Link} to={`/Stafi/manage1/${lenda.id}`} onClick={() => openForm(lenda.id)} basic color='blue' content='Edit' />
                    <Button as={Link} to='/Stafi/lendet'onClick={cancelSelectedLenda} basic color='blue' content='Cancel' />
                    {/* <Button onClick={() => openForm(lenda.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedLenda} basic color='red' content='Cancel' /> */}
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

