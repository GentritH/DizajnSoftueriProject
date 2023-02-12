import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function OraDetails() {
    const { oraStore} = useStore();
    const { selectedOra: ora, loadOra, loadingInitial, openForm, cancelSelectedOra} = oraStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadOra(id);
    }, [id, loadOra]);

    if(loadingInitial || !ora) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{ora.fusha}</Card.Header>
                <Card.Description>
                   {ora.oramesimore}
                </Card.Description>
                <Card.Description>
                   {ora.plani}
                </Card.Description>
                <Card.Description>
                   {ora.lendaId}
                </Card.Description>
                <Card.Description>
                   {ora.njesiaId}
                </Card.Description>
                <Card.Description>
                   {ora.koment}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button as ={Link} to={`/Stafi/manage7/${ora.id}`} onClick={() => openForm(ora.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedOra} basic color='grey' content='Cancel' />
                    {/* <Button onClick={() => openForm(lenda.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedLenda} basic color='red' content='Cancel' /> */}
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

