import {Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Header } from 'semantic-ui-react';


import MyTextInput from '../../../app/common/form/MyTextInput';
import { Stafi } from '../../../app/models/UserStafiAkademik';

import { useStore } from '../../../app/stores/store';



export default observer(function StafiForm() {
    const {StafiAkademikStore} = useStore();
    const {selectedstafi,updateStafi} = StafiAkademikStore;



    const initialState = selectedstafi ?? {
        userName: '',
        id:'',
        roli:'',
        emri: '',
        mbiemri: '',
        email: '',
        token: '',
        Password: '',
        normalizedUserName:'',
    }

    const [stafiAkademik] = useState(initialState);

    function handleFormSubmit(stafiAkademik: Stafi) {
        updateStafi(stafiAkademik);
    }
    
    return (
        
        <Formik
        enableReinitialize initialValues={stafiAkademik}
        onSubmit={values => handleFormSubmit(values)}>
        {({ handleSubmit, isValid, isSubmitting, dirty }) => ( (
                <Form className='ui form error' onSubmit={handleSubmit}>
                    <Header as='h2' content='Regjistro Stafin' color='teal' textAlign='center' />
                    <MyTextInput name='emri' placeholder='emri' />
                    <MyTextInput name='mbiemri' placeholder='mbiemri' />
                    <MyTextInput name='roli' placeholder='Roli'/>
                    <MyTextInput name='email' placeholder='email' />
                    <MyTextInput name='userName' placeholder='userName' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                 
                    
                 
                 
                    <Button disabled={!isValid || !dirty || isSubmitting} 
                          loading={isSubmitting} content='Register' type='submit' fluid />
                </Form>
))}
        </Formik>
    )
})