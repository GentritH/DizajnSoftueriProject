import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import KlasatDetails from "./KlasatDetails";
import KlasatForm from "../form/KlasatForm";
import KlasatList from "./KlasatList";



export default observer(function KlasatFDashboard() {

    const { klasatStore } = useStore();
    const { loadKlasatF, klasatRegistry, editMode, openForm, selectedKlasat } = klasatStore;

    useEffect(() => {
        if (klasatRegistry.size <= 1) loadKlasatF(); 
    }, [klasatRegistry.size, loadKlasatF]);



    if (klasatStore.loadingInitial) return <Dimmer active><Loader>Loading the app e-Shkollori</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='7'>
                <KlasatList />
            </Grid.Column>
            <Grid.Column width='6'>
                <Container>
                    <Button onClick={() => openForm()} color='blue' content='Krijo Klase' size='big' ></Button>
                </Container>
                <h2 >Te Dhenat Per Klasen:</h2>

                {selectedKlasat && !editMode &&
                    <KlasatDetails
                    />}
                {editMode &&
                    <KlasatForm />}
            </Grid.Column>
        </div>
    )

})

