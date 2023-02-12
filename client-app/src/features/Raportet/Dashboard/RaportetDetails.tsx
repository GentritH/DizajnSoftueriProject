import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function RaportetDetails() {
    const { raportetStore,nxenesiStore} = useStore();
    const { selectedRaportet: raportet, loadRaportin, loadingInitial, openForm, cancelselectedRaportet} = raportetStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadRaportin(id);
    }, [id, loadRaportin]);

    if(loadingInitial || !raportet) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        
        <Card fluid>
            <Card.Content>
                <Card.Header>{nxenesiStore.getEmriNxenesitById(raportet.nxenesiId)} {nxenesiStore.getMbiemriNxenesitById(raportet.nxenesiId)} </Card.Header>
                <Card.Description><b>Detyrat:</b> {raportet.detyrat} </Card.Description>
                <Card.Description><b>Angazhimi në klasë:</b> {raportet.angazhimi} </Card.Description>
                <Card.Description><b>Performanca:</b> {raportet.performanca} </Card.Description>
                <Card.Description> <b>Aktiviteti fizik në klasë:</b> {raportet.aktivititeti} </Card.Description>
               




           
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button as ={Link} to={`/Stafi/manageRaportet/${raportet.id}`}  onClick={() => openForm(raportet.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelselectedRaportet} basic color='blue' content='Cancel' />
                
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

