import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import NjesiaDetails from "./NjesiaDetails";
import NjesiaForm from "../form/NjesiaForm";
import NjesiaList from "./NjesiaList";




export default observer(function NjesiteDashboard() {

    const { njesiaStore } = useStore();
    const { loadNjesite, njesiaRegistry, editMode, selectedNjesia, openForm} = njesiaStore;

    useEffect(() => {
        if (njesiaRegistry.size <= 1) loadNjesite();
    }, [njesiaRegistry.size, loadNjesite]);



    if (njesiaStore.loadingInitial) return <Dimmer active><Loader>Loading the app e-Shkollori</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <NjesiaList />
            </Grid.Column>
            <Grid.Column width='6'>
                <Container>
                    <Button onClick={() => openForm()} color='green' content='Shto njesi te re!' size='big' ></Button>
                </Container>
                

                {selectedNjesia && !editMode &&
                    <NjesiaDetails
                    />}
                {editMode &&
                    <NjesiaForm />}
            </Grid.Column>
        </div>
    )

})

