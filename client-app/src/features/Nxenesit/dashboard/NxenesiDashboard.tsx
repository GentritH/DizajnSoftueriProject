import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import NxenesiForm from "../form/NxenesiForm";
import RegisterFormNxenesi from "../form/RegisterFormNxenesi";
import NxenesiDetails from "./NxenesiDetails";
import NxenesiList from "./NxenesiList";




export default observer(function NxenesitDashboard() {

    const { nxenesiStore, modalStore } = useStore();
    const { loadNxenesit, nxenesiRegistry, editMode, selectedNxenesi } = nxenesiStore;

    // useEffect(() => {
    //     nxenesiStore.loadNxenesit();
    // }, [nxenesiStore]);

    useEffect(() => {
        if (nxenesiRegistry.size <= 1) loadNxenesit();
    }, [nxenesiRegistry.size, loadNxenesit]);
    

    if (nxenesiStore.loadingInitial) return <Dimmer active><Loader>Loading the app e-Shkollori</Loader></Dimmer>;
    return (
        <Grid>
           <Grid.Column width='16'>
                <NxenesiList />
            </Grid.Column>
            <Grid.Column width='6'>

                <Button color="teal" onClick={() => modalStore.openModal(<RegisterFormNxenesi />)} size='huge' >
                    Regjistro Nxenesin!
                </Button>
                <h2 >Nxenesi:</h2>
                {selectedNxenesi && !editMode &&
                   <NxenesiDetails/> }
                {editMode &&
                    <NxenesiForm />}
            </Grid.Column>
        </Grid>
    )

})

