import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";



export default observer (function MungesaDetails() {
    const { mungesaStore,nxenesiStore} = useStore();
    const { selectedMungesa: mungesa, loadMungesa, loadingInitial, openForm, cancelSelectedMungesa} = mungesaStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadMungesa(id);
    }, [id, loadMungesa]);

    if(loadingInitial || !mungesa) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Card fluid>
            <Card.Content>
            <Card.Header>{nxenesiStore.getEmriNxenesitById(mungesa.nxenesiId)} {nxenesiStore.getMbiemriNxenesitById(mungesa.nxenesiId)} </Card.Header>
                <Card.Description>
                   {mungesa.periudha}
                </Card.Description>
                <Card.Description>
                   {mungesa.arsye}
                </Card.Description>
                <Card.Description>
                   {mungesa.paarsye}
                </Card.Description>
                <Card.Description>
                   {mungesa.shenim}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button as ={Link} to={`/Stafi/manage8/${mungesa.id}`} onClick={() => openForm(mungesa.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedMungesa} basic color='grey' content='Cancel' />
                    {/* <Button onClick={() => openForm(lenda.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedLenda} basic color='red' content='Cancel' /> */}
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

