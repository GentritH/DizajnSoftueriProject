import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, ButtonGroup, Card} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function NxenesiDetails () {
    const {nxenesiStore} = useStore();
    const {selectedNxenesi: nxenesi, loadingInitial,loadNxenesi, cancelSelectedNxenesi, openForm2} = nxenesiStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadNxenesi(id);
    }, [id, loadNxenesi]);

    if(loadingInitial || !nxenesi) return <LoadingComponent/>;

    return(
        <Card fluid>
            <Card.Content>
                <Card.Header>{nxenesi.emri} {nxenesi.mbiemri}</Card.Header>
                <Card.Description>
                    <div><label>Username: </label>{nxenesi.userName}</div>
                    <div><label>Emri i prindit: </label>{nxenesi.emriPrindit}</div>
                    <div><label>Klasa </label>{nxenesi.klasa}</div>
                    <div><label>Email: </label>{nxenesi.email}</div>
                    {/* <div><label>Numri i telefonit: </label>{nxenesi.numriTelefonit}</div> */}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths='2'>
                    <Button onClick={() => openForm2(nxenesi.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectedNxenesi} basic color='grey' content='Cancel'/>
                </ButtonGroup>
            </Card.Content>
        </Card>

    )
})