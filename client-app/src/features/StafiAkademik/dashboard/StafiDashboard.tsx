import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import {Button, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import RegisterFormStafi from "../form/RegisterFormStafi";
import StafiForm from "../form/StafiForm";
import StafiDetails from "./StafiDetails";
import StafiList from "./StafiList";






export default observer(function LendetDashboard() {

    const { StafiAkademikStore,modalStore} = useStore();
    const { loadStafin, stafiRegistry, editMode, selectedstafi} = StafiAkademikStore;

    useEffect(() => {
        if (stafiRegistry.size <= 1) loadStafin();
    }, [stafiRegistry.size, loadStafin]);



    if (StafiAkademikStore.loadingInitial) return <Dimmer active><Loader>Loading the app e-Shkollori</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <StafiList />
            </Grid.Column>
            <Grid.Column width='6'>

                  <Button  color="blue" onClick={() => modalStore.openModal(<RegisterFormStafi />)} size='huge' >
                                Regjistro Stafin!
                        </Button>
                        
                <h2 >Te Dhenat Per Stafin:</h2>

              
                {selectedstafi && !editMode &&
                    <StafiDetails
                    />}
                {editMode &&
                    <StafiForm />}

            </Grid.Column>
        </div>
    )

})

