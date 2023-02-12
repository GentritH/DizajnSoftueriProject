import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function PlanifikimetDetails() {
    const { planifikimetStore} = useStore();
    const { selectedPlanifikimet: planifikimet, loadPlanin, loadingInitial, openForm, cancelSelectedPlanifikimet} = planifikimetStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadPlanin(id);
    }, [id, loadPlanin]);

    if(loadingInitial || !planifikimet) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{planifikimet.mesimdhenes}</Card.Header>
                <Card.Description>
                   {planifikimet.lendaId}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button as ={Link} to={`/Stafi/manage5/${planifikimet.id}`} onClick={() => openForm(planifikimet.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedPlanifikimet} basic color='blue' content='Cancel' />
                    {/* <Button onClick={() => openForm(lenda.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedLenda} basic color='red' content='Cancel' /> */}
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

