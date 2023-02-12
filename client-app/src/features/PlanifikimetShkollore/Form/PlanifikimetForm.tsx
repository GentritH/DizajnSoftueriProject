import { observer } from 'mobx-react-lite';
import  { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';

import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryOptions, yearOption } from '../../../app/common/options/categoryOptions';


import { planifikimet } from '../../../app/models/Planifikimet';

export default observer(function PlanifikimetForm() {
    const history = useHistory();
    const { planifikimetStore,lendaStore,klasatStore,StafiAkademikStore } = useStore();
    const { createPlanifikimet, updatePlanifikimet, loadPlanin, loadingInitial,closeForm } = planifikimetStore;

        const {lendetById}=lendaStore;

        const {klasatFById}=klasatStore;
        const {stafi}=StafiAkademikStore;
    
   

    const { id } = useParams<{ id: string }>();

    const [planifikimet, setPlanifikimet] = useState<planifikimet>({
        id: '',
        klasaId: '',
        lendaId: '',
        dataeRegjistrimit: '',
        llojiPlanifikimit:'',
        mesimdhenes:stafi?.id!,
        vitiShkollor:'',
    });

    


    const validationSchema = Yup.object({
        klasaId: Yup.string().required('The KlasaID  is required'),
        lendaId: Yup.string().required('The lendaId  is required'),
        dataeRegjistrimit: Yup.string().required('The dataeRegjistrimit is required'),
        llojiPlanifikimit: Yup.string(),
        mesimdhenes: Yup.string().required('The mesimdhenes  is required'),
        vitiShkollor: Yup.string().required('The vitiShkollor is required'),
     
    })

    useEffect(() => {
        if (id) loadPlanin(id).then(planifikimet => setPlanifikimet(planifikimet!))
    }, [id, loadPlanin]);

    function handleFormSubmit(planifikimet: planifikimet) {
        if (planifikimet.id.length === 0) {
            let newActivity = {
                ...planifikimet,
                id: uuid()
            };
            createPlanifikimet(newActivity,planifikimet.lendaId,planifikimet.klasaId).then(() => history.push(`/Stafi/Planifikimet/`))
        } else {
            updatePlanifikimet(planifikimet).then(() => history.push(`/Stafi/Planifikimet/${planifikimet.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Header content='Activity Details' sub color='teal' />
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={planifikimet} 
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>

                         <MySelectInput options=
                            {
                                klasatFById.map(klasa => (
                                    {
                                   key:klasa.id,
                                    text:klasa.emriKlases,
                                     value:klasa.id}
                                ))
                            } placeholder='Klasa' name='klasaId' />

                        <MySelectInput options=
                            {
                                lendetById.map(lenda => (
                                    {
                                   key:lenda.id,
                                    text:lenda.emriLendes,
                                     value:lenda.id}
                                ))
                            } placeholder='Lenda' name='lendaId' />

                    
                             
                        <MyTextInput type='date' placeholder='Data e regjistrimit' name='dataeRegjistrimit' />

                       
                            
                        <MySelectInput options={categoryOptions} placeholder='llojiPlanifikimit'  name='llojiPlanifikimit' />           
                                           
                        <MySelectInput options={yearOption} placeholder='vitiShkollor'  name='vitiShkollor' />      

                        <MyTextInput  placeholder='mesimdhenes'  name='mesimdhenes' />
                        
                        <Button 
                           floated='right' 
                            positive type='submit' content='Submit' />
                        <Button  onClick={closeForm} as={Link} to='/Stafi/Planifikimet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
})