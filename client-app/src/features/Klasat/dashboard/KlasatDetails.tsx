import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function KlasatDetails() {
    const { klasatStore} = useStore();
    const { selectedKlasat: klasat, loadKlasat, loadingInitial, openForm, cancelSelectedKlasat} = klasatStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadKlasat(id);
    }, [id, loadKlasat]);

    if(loadingInitial || !klasat) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{klasat.emriKlases}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Card.Header>{klasat.test}</Card.Header>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
               <Button as ={Link} to={`/Stafi/manage/${klasat.id}`} onClick={() => openForm(klasat.id)} basic color='blue' content='Edit' />
                    <Button as={Link} to='/Stafi/klasatF'onClick={cancelSelectedKlasat} basic color='grey' content='Cancel' />
                    {/* <Button onClick={() => openForm(lenda.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedLenda} basic color='red' content='Cancel' /> */}
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

