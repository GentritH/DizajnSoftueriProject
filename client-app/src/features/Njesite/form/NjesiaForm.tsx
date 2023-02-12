import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Dimmer, Form } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from 'uuid';



export default observer(function NjesiaForm() {
    const history = useHistory();
    const { njesiaStore } = useStore();
    const { createNjesia, updateNjesia, loading, loadNjesia, loadingInitial, closeForm} = njesiaStore;
    const { id } = useParams<{ id: string }>();

    const [njesia, setNjesia] = useState({
        id: '',
        emriNjesise: '',
        pershkrimi: ''
    });

    useEffect(() => {
        if (id) loadNjesia(id).then(njesia => setNjesia(njesia!))
    }, [id, loadNjesia]);

    function handleSubmit() {
        if (njesia.id.length === 0) {
            let newNjesia = {
                ...njesia,
                id: uuid()
            };
            createNjesia(newNjesia).then(() => history.push(`/Stafi/njesite/${newNjesia.id}`));
        }else{
            updateNjesia(njesia).then(() => history.push(`/Stafi/njesite/${njesia.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setNjesia({ ...njesia, [name]: value })
    }
    if (loadingInitial) return <Dimmer />

    return (
        <div className="ui segment">
            <Form onSubmit={handleSubmit} autoComplete='off' >
                 Shtoni te dhenat per njesine e re :
                 <br /><br />
                <Form.Input placeholder='Emri i njesise.' value={njesia.emriNjesise} name='emriNjesise' onChange={handleInputChange} />
                <Form.TextArea placeholder='Pershkrimi..' value={njesia.pershkrimi} name='pershkrimi' onChange={handleInputChange} />
                <Button loading={loading}  floated='right' positive type='submit' content='Submit' />
                <Button  onClick={closeForm} as={Link} to='/Stafi/njesite' floated='right' type='submit' content='Cancel' />
            </Form>
            <br />
            <br />
        </div>
    
    )
})