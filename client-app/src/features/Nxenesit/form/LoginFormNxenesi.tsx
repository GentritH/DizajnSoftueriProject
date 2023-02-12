import { ErrorMessage, Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { Button, Header, Label } from 'semantic-ui-react';
import MyTextInput from '../../../app/common/form/MyTextInput';
import { useStore } from '../../../app/stores/store';


 export default observer(function LoginFormNxenesi(){
     const {nxenesiStore} =  useStore();
    return (
        <Formik
        initialValues = {
            {
                id: '',
                Emri: '',
                Mbiemri: '',
                Email: '',
                Username: '',
                Password: '',
                EmriPrindit: '',
                DataLindjes: '',
                Klasa: '',
                VitiRegjistrimit: '',
                NumriTelefonit: '',
                token: '',
                error: null  
            }
        }
        onSubmit = {(values, {setErrors}) => nxenesiStore.login(values).catch(error => setErrors({error: 'Invalid email or password'}))}
        >
           {({handleSubmit, isSubmitting, errors}) =>(
               <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Kyçu si nxënës' color='teal' textAlign='center'/>
                   <MyTextInput name='email' placeholder='Email' />
                   <MyTextInput name='password' placeholder='Password' type='password'/>
                   <ErrorMessage name='error' render={() => <Label style={{marginBottom: 10}} basic color='red' content={errors.error} />} />
                   <Button  loading = {isSubmitting} positive content = 'Kyçu' type='submit' fluid />
               </Form>
           )}
        </Formik>
    )
 })