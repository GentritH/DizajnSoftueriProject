import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { Form } from "semantic-ui-react";



export default observer(function NxenesiForm() {
    const {nxenesiStore} = useStore();
    const {selectedNxenesi,updateNxenesit, loading, closeForm, createNxenesi} = nxenesiStore;

    const initialState = selectedNxenesi ?? {
        userName: '',
        id:'',
        emri: '',
        mbiemri: '',
        email: '',
        token: '',
        password: '',
        klasa:'',
        emriPrindit:'',
        numriTelefonit:'',
        normalizedUserName:'',
    }

    console.log("here");
    const [nxenesi, setNxenesi] = useState(initialState);

    function handleSubmit() {
        nxenesi.id ? updateNxenesit(nxenesi) : createNxenesi(nxenesi);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setNxenesi({ ...nxenesi, [name]: value })
    }
    // console.log(nxenesi.username)

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Emri' value={nxenesi.emri} name='emri' onChange={handleInputChange} />
                <Form.Input placeholder='Mbiemri' value={nxenesi.mbiemri} name='mbiemri' onChange={handleInputChange} />
                <Form.Input placeholder='Username' value={nxenesi.userName} name='username' onChange={handleInputChange} />
                <Form.Input placeholder='Klasa' value={nxenesi.klasa} name='klasa' onChange={handleInputChange} />
                <Form.Input placeholder='Emri Prindit' value={nxenesi.emriPrindit} name='Emri prindit' onChange={handleInputChange} />
                <Form.Input placeholder='Email' value={nxenesi.email} name='Email' onChange={handleInputChange} />
                <Form.Input type='Password' placeholder='Fjalekalimi' value={nxenesi.password} name='password' onChange={handleInputChange} />                
                <Form.Input placeholder='Nr. i Telefonit' value={nxenesi.numriTelefonit} name='phoneNumber' onChange={handleInputChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})