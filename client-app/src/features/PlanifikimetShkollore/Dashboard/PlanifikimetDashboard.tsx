import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import PlanifikimetForm from "../Form/PlanifikimetForm";
import PlanifikimetDetails from "./PlanifikimetDetails";
import PlanifikimetList from "./PlanifikimetList";


//pas klikimit te cancel gjendja kalon ne undefined

//lendaDashboard eshte child component of  App component


export default observer(function PlanifikimetDashboard() {

    const { planifikimetStore,lendaStore,klasatStore } = useStore();
    const { loadPlanifikimet, planifikimetRegistry, editMode, selectedPlanifikimet, openForm} = planifikimetStore;
    const { loadLendet, lendaRegistry} = lendaStore;
    const { loadKlasatF, klasatRegistry} = klasatStore;

    useEffect(() => {
        if (klasatRegistry.size <= 1) loadKlasatF(); 
    }, [klasatRegistry.size, loadKlasatF]);
    useEffect(() => {
        if (lendaRegistry.size <= 1) loadLendet();
    }, [lendaRegistry.size, loadLendet]);

    useEffect(() => {
        if (planifikimetRegistry.size <= 1) loadPlanifikimet();
    }, [planifikimetRegistry.size, loadPlanifikimet]);



    if (planifikimetStore.loadingInitial) return <Dimmer active><Loader>Loading the app</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <PlanifikimetList />
            </Grid.Column>
            <Grid.Column width='6'>
                <Container>
                    <Button onClick={() => openForm()} color='blue' content='Krijo Planifikimin' size='big' ></Button>
                </Container>
                <h2 >Te Dhenat Per Planifikimet:</h2>

                {selectedPlanifikimet && !editMode &&
                    <PlanifikimetDetails
                    />}
                {editMode &&
                    <PlanifikimetForm />}
            </Grid.Column>
        </div>
    )

})

