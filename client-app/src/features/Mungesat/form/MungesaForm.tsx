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
import { PeriudhaOption } from '../../../app/common/options/categoryOptions';
import { Mungesa } from '../../../app/models/mungesa';





export default observer(function MungesaForm() {
    const history = useHistory();
    const { mungesaStore,nxenesiStore } = useStore();
    const { createMungesa, updateMungesa,
         loadMungesa, loadingInitial,closeForm } = mungesaStore;

        const {NxenesiById}=nxenesiStore;
   

    const { id } = useParams<{ id: string }>();

    const [mungesa, setMungesa] = useState<Mungesa>({
        id:'',
        nxenesiId: '',
        periudha:'',
        arsye:'',
        paarsye:'',
        shenim:'',
    });

    


    const validationSchema = Yup.object({
        nxenesiId: Yup.string().required('Nxenesi  is required'),
        periudha: Yup.string().required('Periudha is required'),
     
    })

    useEffect(() => {
        if (id) loadMungesa(id).then(mungesa => setMungesa(mungesa!))
    }, [id, loadMungesa]);

    function handleFormSubmit(mungesa: Mungesa) {
        if (mungesa.id.length === 0) {
            let newMungesa = {
                ...mungesa,
                id: uuid()
            };
            createMungesa(newMungesa,mungesa.nxenesiId).then(() => history.push(`/Stafi/mungesat/`))
        } else {
            updateMungesa(mungesa).then(() => history.push(`/Stafi/mungesat/${mungesa.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Header content='Details' sub color='teal' />
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={mungesa} 
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                          Plotesoni fushat per te shtuar mungese:
                          <br /><br />

                      
                          <MySelectInput options={NxenesiById.map(nxenesi => (
                            {
                                key: nxenesi.id,
                                text: nxenesi.emri,
                                value: nxenesi.id
                            }
                        ))} label='Nxenesi' name='nxenesiId' placeholder={''} />
                    
                        <MySelectInput options={PeriudhaOption} label='Periudha' name='periudha' placeholder={''} />   
                        <MyTextInput placeholder='Mungesat me arsye'  name='arsye' />
                        <MyTextInput placeholder='Mungesat me arsye'  name='paarsye' />
                        <MyTextInput placeholder='Shenim'  name='shenim' />

                        <Button 
                           floated='right' 
                            positive type='submit' content='Submit' />
                        <Button  onClick={closeForm} as={Link} to='/Stafi/mungesat' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
})