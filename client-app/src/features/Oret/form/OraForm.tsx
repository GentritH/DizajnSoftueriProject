import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { planiOptions, } from '../../../app/common/options/categoryOptions';

import { Ora } from '../../../app/models/ora';





export default observer(function OraForm() {
    const history = useHistory();
    const { oraStore,lendaStore,njesiaStore } = useStore();
    const { createOra, updateOra, loadOra, loadingInitial,closeForm } = oraStore;

        const {lendetById}=lendaStore;

        const {njesiteById}=njesiaStore;
    
   

    const { id } = useParams<{ id: string }>();

    const [ora, setOra] = useState<Ora>({
        id: '',
        fusha:'',
        oramesimore:'',
        plani:'',
        lendaId: '',
        njesiaId: '',
        koment:''
    });

    


    const validationSchema = Yup.object({
        njesiaId: Yup.string().required('The NjesiaID  is required'),
        lendaId: Yup.string().required('The lendaId  is required'),
        plani: Yup.string()
     
    })

    useEffect(() => {
        if (id) loadOra(id).then(ora => setOra(ora!))
    }, [id, loadOra]);

    function handleFormSubmit(ora: Ora) {
        if (ora.id.length === 0) {
            let newOra = {
                ...ora,
                id: uuid()
            };
            createOra(newOra,ora.lendaId,ora.njesiaId).then(() => history.push(`/Stafi/oret/`))
        } else {
            updateOra(ora).then(() => history.push(`/Stafi/oret/${ora.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Header content='Activity Details' sub color='teal' />
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={ora} 
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                          Shtoni te dhenat per oren e re :
                          <br /><br />

                          <MyTextInput placeholder='fusha'  name='fusha' />         
                         <MyTextInput placeholder='oramesimore'  name='oramesimore' /> 
                         <MySelectInput options={planiOptions} placeholder='plani'  name='plani' />           
                         <MySelectInput options=
                            {
                                  njesiteById.map(njesia => (
                                    {
                                   key:njesia.id,
                                   text:njesia.emriNjesise,
                                   value:njesia.id}
                                ))
                            } placeholder='Njesia mesimore' name='njesiaId' />

                        <MySelectInput options=
                            {
                                lendetById.map(lenda => (
                                    {
                                   key:lenda.id,
                                    text:lenda.emriLendes,
                                     value:lenda.id}
                                ))
                            } placeholder='Lenda' name='lendaId' />
                        
                        <MyTextInput placeholder='koment'  name='koment' />

                        <Button 
                           floated='right' 
                            positive type='submit' content='Submit' />
                        <Button  onClick={closeForm} as={Link} to='/Stafi/oret' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
})