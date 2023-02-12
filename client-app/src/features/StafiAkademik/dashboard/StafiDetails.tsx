import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Dimmer, Loader, Form,Segment} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function StafiDetails() {
    const { StafiAkademikStore} = useStore();
    const { selectedstafi: stafi, loadStafi, loadingInitial, openForm, cancelSelectedStafi} = StafiAkademikStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadStafi(id);
    }, [id, loadStafi]);

    if(loadingInitial || !stafi) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Segment >
        <Form>
          <Form.Field>
          <label>Emri:</label>
          <fieldset>{stafi.emri} {stafi.mbiemri}</fieldset>
        </Form.Field>
        <Form.Field>
          <label>Roli:</label>
          <fieldset>{stafi.roli}</fieldset>
        </Form.Field>
        <Form.Field>
          <label>Email:</label>
          <fieldset>{stafi.email}</fieldset>
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Button.Group widths='2'>
                    <Button  onClick={() => openForm(stafi.id)} basic color='blue' content='Edit' />
                    <Button as={Link} to='/Stafi/stafiAkademik'onClick={cancelSelectedStafi} basic color='grey' content='Cancel' />
                   
               </Button.Group>
      </Form>
      </Segment>
    )
})


