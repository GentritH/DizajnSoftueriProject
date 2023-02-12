import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Dimmer, Form } from "semantic-ui-react";

import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from 'uuid';



export default observer(function KlasatForm() {
    const history = useHistory()
    const { klasatStore } = useStore();
    const { createKlasat, updateKlasat, loading, loadKlasat, loadingInitial ,closeForm} = klasatStore;
    const { id } = useParams<{ id: string }>();

    const [klasat, setKlasat] = useState({
        id: '',
        emriKlases: '',
        test:'',
    }); 

    useEffect(() => {
        if (id) loadKlasat(id).then(klasat => setKlasat(klasat!))
    }, [id, loadKlasat]);

    function handleSubmit() {
        if (klasat.id.length === 0) {
            let newKlasat = {
                ...klasat,
                id: uuid()
            };
            createKlasat(newKlasat).then(() => history.push(`/Stafi/klasatF/${newKlasat.id}`));
        }else{
            updateKlasat(klasat).then(() => history.push(`/Stafi/klasatF/${klasat.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setKlasat({ ...klasat, [name]: value })
    }
    if (loadingInitial) return <Dimmer />

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input placeholder='Emri i klases' value={klasat.emriKlases} name='emriKlases' onChange={handleInputChange} />
                <Form.Input placeholder='TestInput' value={klasat.test} name='test' onChange={handleInputChange} />
                <Button loading={loading}  floated='right' positive type='submit' content='Submit' />
                <Button  onClick={closeForm} as={Link} to='/Stafi/klasatF' floated='right' type='submit' content='Cancel' />
            </form>
            <br />
            <br />
        </div>
    
    )
})