import { ErrorMessage, Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import { useStore } from '../../../app/stores/store';
import ValidationErrors from '../../errors/ValidationErrors';


export default observer(function RegisterForm() {
    const {StafiAkademikStore} = useStore();
    return (
        
        <Formik
            initialValues={{userName: '', emri: '',mbiemri:'', Email: '',token:'', Password: '',Roli:'', error: null}}
            onSubmit={(values, {setErrors}) => StafiAkademikStore.register(values).catch(error => 
                setErrors({error}))}
            validationSchema={Yup.object({
                emri: Yup.string().required(),
                userName:Yup.string().required(),   
                mbiemri: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required(),
                Roli: Yup.string().required(),
              
            })}
        >
            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Regjistro Stafin' color='teal' textAlign='center' />
                    <MyTextInput name='emri' placeholder='emri' />
                    <MyTextInput  name='mbiemri' placeholder='mbiemri' />
                    <MyTextInput name='Roli' placeholder='Roli'/>
                    <MyTextInput name='email' placeholder='email' />
                    <MyTextInput name='userName' placeholder='userName' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
               
                    
                    <ErrorMessage 
                        name='error' render={() => 
                        <ValidationErrors errors={errors.error}/>}
                    />
                    <Button disabled={!isValid || !dirty || isSubmitting} 
                        loading={isSubmitting} positive content='Register' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
})