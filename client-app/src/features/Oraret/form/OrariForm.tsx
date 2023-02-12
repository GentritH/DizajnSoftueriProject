import { observer } from "mobx-react-lite";
import {useState } from "react";
import { Form, Formik } from "formik";
import { Button, Segment } from "semantic-ui-react";
import { v4 as uuid } from 'uuid';
import { useEffect } from "react";
import { useStore } from "../../../app/stores/store";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { Link, useHistory, useParams } from "react-router-dom";
import { Orari } from "../../../app/models/orari";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function OrariForm() {
    const history = useHistory();
    const { orariStore, lendaStore,klasatStore } = useStore();
    const { createOrari,loadOrari, updateOrari,loading, loadingInitial,closeForm,} = orariStore;
    const { id } = useParams<{ id: string }>();
    const {lendetById}=lendaStore;
    const {klasatFById}=klasatStore;

    const [oraret, setOrari] = useState<Orari>( {
    id: "",
    lendaId:"",
    klasaId: "",
    hene1: "",
    hene2: "",
    hene3: "",
    hene4: "",
    hene5: "",
    hene6: "",
    marte1: "",
    marte2: "",
    marte3: "",
    marte4: "",
    marte5: "",
    marte6: "",
    merkure1: "",
    merkure2: "",
    merkure3: "",
    merkure4: "",
    merkure5: "",
    merkure6: "",
    enjte1: "",
    enjte2: "",
    enjte3: "",
    enjte4: "",
    enjte5: "",
    enjte6: "",
    premte1: "",
    premte2: "",
    premte3: "",
    premte4: "",
    premte5: "",
    premte6: "",
  });

  useEffect(() => {
    if (id) loadOrari(id).then(oraret => setOrari(oraret!))
}, [id, loadOrari]);

function handleFormSubmit(oraret: Orari) {
    if (oraret.id.length === 0) {
        let newOrari = {
            ...oraret,
            id: uuid()
        };
        createOrari(newOrari,oraret.lendaId,oraret.klasaId).then(() => history.push(`/Stafi/Oraret/`))
    } else {
        updateOrari(oraret).then(() => history.push(`/Stafi/Oraret/${oraret.id}`))
    }
}


if (loadingInitial) return <LoadingComponent content='Loading activity...' />
  return (
    <Segment clearing>
      <Formik
        // validationSchema={validationSchema}
        enableReinitialize
        initialValues={oraret}
        onSubmit={values => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit}  autoComplete="off">
            <MySelectInput
              label="Klasa"
              options={klasatFById.map(klasa => (
                {
               key:klasa.id,
                text:klasa.emriKlases,
                 value:klasa.id}
            ))}
              placeholder="Klasa"
              name="klasaId"
            />
             <MySelectInput 
               label="Lenda"
               options={lendetById.map(lenda => (
                 {
                key:lenda.id,
                 text:lenda.id,
                  value:lenda.id}
             ))}
               placeholder="Lenda"
               name="lendaId"
              
            />
            <MySelectInput
              label="E Hene Ora 1"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="hene1"
            />
          
            <MySelectInput
              label="E Hene Ora 2"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="hene2"
            />
            <MySelectInput
              label="E Hene Ora 3"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="hene3"
            />
            <MySelectInput
              label="E Hene Ora 4"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="hene4"
            />
            <MySelectInput
              label="E Hene Ora 5"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="hene5"
            />
            <MySelectInput
              label="E Hene Ora 6"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="hene6"
            />
            <MySelectInput
              label="E Marte Ora 1"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="marte1"
            />
            <MySelectInput
              label="E Marte Ora 2"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="marte2"
            />
            <MySelectInput
              label="E Marte Ora 3"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="marte3"
            />
            <MySelectInput
              label="E Marte Ora 4"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="marte4"
            />
            <MySelectInput
              label="E Marte Ora 5"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="marte5"
            />
            <MySelectInput
              label="E Marte Ora 6"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="marte6"
            />
            <MySelectInput
              label="E Merkure Ora 1"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="merkure1"
            />
            <MySelectInput
              label="E Merkure Ora 2"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="merkure2"
            />
            <MySelectInput
              label="E Merkure Ora 3"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="merkure3"
            />
            <MySelectInput
              label="E Merkure Ora 4"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="merkure4"
            />
            <MySelectInput
              label="E Merkure Ora 5"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="merkure5"
            />
            <MySelectInput
              label="E Merkure Ora 6"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="merkure6"
            />
            <MySelectInput
              label="E Enjte Ora 1"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="enjte1"
            />
            <MySelectInput
              label="E Enjte Ora 2"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="enjte2"
            />
            <MySelectInput
              label="E Enjte Ora 3"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="enjte3"
            />
            <MySelectInput
              label="E Enjte Ora 4"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="enjte4"
            />
            <MySelectInput
              label="E Enjte Ora 5"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="enjte5"
            />
            <MySelectInput
              label="E Enjte Ora 6"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="enjte6"
            />
            <MySelectInput
              label="E Premte Ora 1"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="premte1"
            />
            <MySelectInput
              label="E Premte Ora 2"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="premte2"
            />
            <MySelectInput
              label="E Premte Ora 3"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="premte3"
            />
            <MySelectInput
              label="E Premte Ora 4"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="premte4"
            />
            <MySelectInput
              label="E Premte Ora 5"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="premte5"
            />
            <MySelectInput
              label="E Premte Ora 6"
              options={lendetById.map(lenda => (
                {
               key:lenda.id,
                text:lenda.emriLendes,
                 value:lenda.id}
            ))}
              placeholder="Lenda"
              name="premte6"
            />
            <Button
              // disabled={isSubmitting || !dirty || !isValid}
              loading={loading} 
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
            <Button
              onClick={closeForm} as={Link} to='/Stafi/Oraret'
              floated="right"
              type="button"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
});
