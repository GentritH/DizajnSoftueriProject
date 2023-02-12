import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LendaDetails from "./LendaDetails";
import LendaForm from "../form/LendaForm";
import LendaList from "./LendaList";


//pas klikimit te cancel gjendja kalon ne undefined

//lendaDashboard eshte child component of  App component


export default observer(function LendetDashboard() {

    const { lendaStore } = useStore();
    const { loadLendet, lendaRegistry, editMode, selectedLenda, openForm} = lendaStore;

    useEffect(() => {
        if (lendaRegistry.size <= 1) loadLendet();
    }, [lendaRegistry.size, loadLendet]);



    if (lendaStore.loadingInitial) return <Dimmer active><Loader>Loading the app e-Shkollori</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <LendaList />
            </Grid.Column>
            <Grid.Column width='6'>
                <Container>
                    <Button onClick={() => openForm()} color='blue' content='Krijo Lende' size='big' ></Button>
                </Container>
                <h2 >Te Dhenat Per Lenden:</h2>

                {selectedLenda && !editMode &&
                    <LendaDetails
                    />}
                {editMode &&
                    <LendaForm />}
            </Grid.Column>
        </div>
    )

})

