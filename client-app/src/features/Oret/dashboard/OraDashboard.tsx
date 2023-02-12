import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import OraForm from "../form/OraForm";
import OraDetails from "./OraDetails";
import OraList from "./OraList";



export default observer(function OretDashboard() {

    const { oraStore, lendaStore, njesiaStore } = useStore();
    const { loadOret, oraRegistry, editMode, selectedOra, openForm} = oraStore;
    const { loadNjesite, njesiaRegistry} = njesiaStore;
    const { loadLendet, lendaRegistry} = lendaStore;

    useEffect(() => {
        if (lendaRegistry.size <= 1) loadLendet();
    }, [lendaRegistry.size, loadLendet]);

    useEffect(() => {
        if (oraRegistry.size <= 1) loadOret();
    }, [oraRegistry.size, loadOret]);



    useEffect(() => {
        if (njesiaRegistry.size <= 1) loadNjesite();
    }, [njesiaRegistry.size, loadNjesite]);
    

    if (oraStore.loadingInitial) return <Dimmer active><Loader>Loading the app e-Shkollori</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <OraList />
            </Grid.Column>
            <Grid.Column width='6'>
                <Container>
                    <Button onClick={() => openForm()} color='green' content='Sheno oren mesimore' size='big' ></Button>
                </Container>

                {selectedOra&& !editMode &&
                    <OraDetails
                    />}
                {editMode &&
                    <OraForm />}
            </Grid.Column>
        </div>
    )

})