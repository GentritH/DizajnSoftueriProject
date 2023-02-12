import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';

import MySelectInput from '../../../app/common/form/MySelectInput';
import { AktivitetiOptions, AngazhimiOptions, DetyratOptions, JavaOption, MuajiOptions, PerformancaOptions } from '../../../app/common/options/categoryOptions';
import { raportet } from '../../../app/models/Raportet';

export default observer(function RaportetForm() {
    const history = useHistory();
    const { raportetStore,lendaStore,klasatStore,nxenesiStore } = useStore();
    const { createRaportet, updateRaportet,
         loadRaportin, loadingInitial,closeForm } = raportetStore;

        const {lendetById}=lendaStore;
    
        const {klasatFById}=klasatStore;
        const {NxenesiById}=nxenesiStore;
    
   

    const { id } = useParams<{ id: string }>();

    const [raportet, setRaportet] = useState<raportet>({

        id: '',
        klasaId: '',
        lendaId: '',
        nxenesiId: '',
        muaji: '',
        java:'',
        detyrat:'',
        angazhimi:'',
        performanca:'',
        aktivititeti:'',
        komenti:'',
    });
    
    


    const validationSchema = Yup.object({
        klasaId: Yup.string().required('Klasa is required'),
        lendaId: Yup.string().required('Lenda  is required'),
        nxenesiId: Yup.string().required('Nxenesi  is required'),
        muaji: Yup.string().required('Muaji  is required'),
        java: Yup.string().required('Java  is required'),
        detyrat: Yup.string().required('Detyrat  is required'),
        angazhimi: Yup.string().required('Angazhimi  is required'),
        performanca: Yup.string().required('Performanca  is required'),
        aktivititeti: Yup.string().required('Aktiviteti  is required'),
        komenti: Yup.string().required('Komenti  is required'),
      
     
    })

    useEffect(() => {
        if (id) loadRaportin(id).then(raportet => setRaportet(raportet!))
    }, [id, loadRaportin]);

    function handleFormSubmit(raportet: raportet) {
        if (raportet.id.length === 0) {
            let newActivity = {
                ...raportet,
                id: uuid()
            };
            createRaportet(newActivity,raportet.lendaId,raportet.klasaId,raportet.nxenesiId).then(() => history.push(`/Stafi/Raportet/`))
        } else {
            updateRaportet(raportet).then(() => history.push(`/Raportet/${raportet.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading Raportet...' />

    return (
        <Segment clearing>
            <Header content='Raportet Details' sub color='teal' />
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={raportet} 
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>

                         <MySelectInput options={klasatFById.map(klasa => (
                            {
                                key: klasa.id,
                                text: klasa.emriKlases,
                                value: klasa.id
                            }
                        ))} label='Klasa' name='klasaId' placeholder={''} />

                        <MySelectInput options={lendetById.map(lenda => (
                            {
                                key: lenda.id,
                                text: lenda.emriLendes,
                                value: lenda.id
                            }
                        ))} label='Lenda' name='lendaId' placeholder={''} />


                                 <MySelectInput options={NxenesiById.map(nxenesi => (
                            {
                                key: nxenesi.id,
                                text: nxenesi.emri,
                                value: nxenesi.id
                            }
                        ))} label='Nxenesi' name='nxenesiId' placeholder={''} />

                    
                             
                       
                        <MySelectInput options={MuajiOptions} label='Muaji' name='muaji' placeholder={''} />   
                        <MySelectInput options={JavaOption} label='Java' name='java' placeholder={''} />   
                        <MySelectInput options={DetyratOptions} label='Detyrat' name='detyrat' placeholder={''} />   
                        <MySelectInput options={AngazhimiOptions} label='Angazhimi në klasë' name='angazhimi' placeholder={''} />   
                        <MySelectInput options={PerformancaOptions} label='Performanca' name='performanca' placeholder={''} />   
                        <MySelectInput options={AktivitetiOptions} label='Aktiviteti fizik në klasë' name='aktivititeti' placeholder={''} />   
                        <MyTextInput  label='Komente shtesë' name='komenti' placeholder={''} />

                       
                            
                     
                        <Button 
                           floated='right' 
                            positive type='submit' content='Submit' />
                        <Button  onClick={closeForm} as={Link} to='/Stafi/Raportet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
})