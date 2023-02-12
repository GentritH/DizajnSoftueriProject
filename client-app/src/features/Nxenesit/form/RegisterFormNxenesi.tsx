import { ErrorMessage, Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import { useStore } from '../../../app/stores/store';
import ValidationErrors from '../../errors/ValidationErrors';


export default observer(function RegisterForm() {
    const { nxenesiStore } = useStore();
    return (
        <Formik
            initialValues={{ Username: '', Emri: '', Mbiemri: '', Email: '', NumriTelefonit: '', token: '', Password: '', error: null }}
            onSubmit={(values, { setErrors }) => nxenesiStore.register(values).catch(error =>
                setErrors({ error }))}
            validationSchema={Yup.object({
                Emri: Yup.string().required(),
                Username: Yup.string().required(),
                Mbiemri: Yup.string().required(),
                Email: Yup.string().required().email(),
                Password: Yup.string().required(),
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Regjistro Nxenesin' color='teal' textAlign='center' />
                    <MyTextInput name='Emri' placeholder='emri' />
                    <MyTextInput name='Mbiemri' placeholder='mbiemri' />
                    <MyTextInput name='Username' placeholder='username' />
                    <MyTextInput name='Klasa' placeholder='klasa' />
                    <MyTextInput name='EmriPrindit' placeholder='Emri i Prindit' />
                    <MyTextInput name='NumriTelefonit' placeholder='Numri telefonit' />
                    <MyTextInput name='Email' placeholder='email' />
                    <MyTextInput name='Password' placeholder='Password' type='password' />
                    <ErrorMessage
                        name='error' render={() =>
                            <ValidationErrors errors={errors.error} />}
                    />
                    <Button disabled={!isValid || !dirty || isSubmitting}
                        loading={isSubmitting} positive content='Register' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
})