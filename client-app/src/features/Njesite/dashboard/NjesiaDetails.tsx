import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function NjesiaDetails() {
    const { njesiaStore} = useStore();
    const { selectedNjesia: njesia, loadNjesia, loadingInitial, openForm, cancelSelectedNjesia} = njesiaStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadNjesia(id);
    }, [id, loadNjesia]);

    if(loadingInitial || !njesia) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{njesia.emriNjesise}</Card.Header>
                <Card.Description>
                   {njesia.pershkrimi}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button as ={Link} to={`/Stafi/manage6/${njesia.id}`} onClick={() => openForm(njesia.id)} basic color='blue' content='Edit' />
                    <Button as={Link} to='/Stafi/njesite'onClick={cancelSelectedNjesia} basic color='grey' content='Cancel' />
                    {/* <Button onClick={() => openForm(njesia.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedNjesia} basic color='red' content='Cancel' /> */}
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

