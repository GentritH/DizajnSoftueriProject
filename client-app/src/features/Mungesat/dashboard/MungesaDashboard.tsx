import { observer } from "mobx-react-lite";
import { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import MungesaForm from "../form/MungesaForm";
import MungesaDetails from "./MungesaDetails";
import MungesaList from "./MungesaList";



export default observer(function MungesatDashboard() {

    const { mungesaStore,nxenesiStore } = useStore();
    const { loadMungesat, mungesaRegistry, editMode, selectedMungesa, openForm} = mungesaStore;


    useEffect(() => {
        if (mungesaRegistry.size <= 1) loadMungesat();
    }, [mungesaRegistry.size, loadMungesat]);

    useEffect(() => {
        nxenesiStore.loadNxenesit();
    }, [nxenesiStore]);




    if (mungesaStore.loadingInitial) return <Dimmer active><Loader>Loading the app e-Shkollori</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <MungesaList />
            </Grid.Column>
            <Grid.Column width='6'>
                <Container>
                    <Button onClick={() => openForm()} color='green' content='Sheno mungese' size='big' ></Button>
                </Container>

                {selectedMungesa&& !editMode && 
                    <MungesaDetails
                    />}
                {editMode &&
                    <MungesaForm />}
            </Grid.Column>
        </div>
    )

})