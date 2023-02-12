import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Dimmer, Form } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from 'uuid';



export default observer(function LendaForm() {
    const history = useHistory();
    const { lendaStore } = useStore();
    const { createLenda, updateLenda, loading, loadLenda, loadingInitial, closeForm} = lendaStore;
    const { id } = useParams<{ id: string }>();

    const [lenda, setLenda] = useState({
        id: '',
        emriLendes: '',
        pershkrimi: ''
    });

    useEffect(() => {
        if (id) loadLenda(id).then(lenda => setLenda(lenda!))
    }, [id, loadLenda]);

    function handleSubmit() {
        if (lenda.id.length === 0) {
            let newLenda = {
                ...lenda,
                id: uuid()
            };
            createLenda(newLenda).then(() => history.push(`/Stafi/lendet/${newLenda.id}`));
        }else{
            updateLenda(lenda).then(() => history.push(`/Stafi/lendet/${lenda.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setLenda({ ...lenda, [name]: value })
    }
    if (loadingInitial) return <Dimmer />

    return (
        <div className="ui segment">
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input placeholder='Emri lendes..' value={lenda.emriLendes} name='emriLendes' onChange={handleInputChange} />
                <Form.TextArea placeholder='Pershkrimi..' value={lenda.pershkrimi} name='pershkrimi' onChange={handleInputChange} />
                <Button loading={loading}  floated='right' positive type='submit' content='Submit' />
                <Button  onClick={closeForm} as={Link} to='/lendet' floated='right' type='submit' content='Cancel' />
            </Form>
            <br />
            <br />
        </div>
        //me ane te handleInputChange ne ruajme inputat ne forme qe kur te hapet forma te hapet e mbushur.
    )
})