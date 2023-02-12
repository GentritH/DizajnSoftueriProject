import React, { SyntheticEvent, useState } from "react";
import { Button, Header, Icon, Modal, TableCell, TableRow } from "semantic-ui-react";
import { Nxenesit } from "../../../app/models/UserNxenesi";
import { useStore } from "../../../app/stores/store";

interface Props {
    nxenesi: Nxenesit
}

export default function NxenesiListItem({ nxenesi }: Props) {

    const { nxenesiStore } = useStore();

    const { deleteNxenesi, loading } = nxenesiStore;


    const [target, setTarget] = useState('');

    const [open, setOpen] = React.useState(false);


    function handleDeleteNxenesi(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteNxenesi(id);
    }

    return (
        <TableRow key={nxenesi.id}>
            <TableCell >{nxenesi.emri}</TableCell>
            <TableCell>{nxenesi.mbiemri}</TableCell>
            <TableCell>{nxenesi.userName}</TableCell>
            <TableCell>{nxenesi.klasa}</TableCell>
            <TableCell>{nxenesi.emriPrindit}</TableCell>
            <TableCell>{nxenesi.email}</TableCell>
            {/* <TableCell>{nxenesi.numriTelefonit}</TableCell> */}
            <TableCell>
                <Button
                    onClick={() => nxenesiStore.selectNxenesit(nxenesi.id)}
                    floated='right'
                    content='View'
                    color='blue' />
            </TableCell>
            <TableCell>

                <Modal
                    closeIcon
                    open={open}
                    trigger={<Button floated="right" content='Delete' color="red" />}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                >
                    <Header icon='delete' content='Are you sure' />
                    <Modal.Content>
                        <p>
                            Are you sure you want to delete the user?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => setOpen(false)}>
                            <Icon name='remove' /> No
                        </Button>
                        <Button
                            name={nxenesi.id}
                            loading={loading && target === nxenesi.id}
                            onClick={(e) => handleDeleteNxenesi(e, nxenesi.id)}
                            color='green'>
                            <Icon name='checkmark' /> Yes

                        </Button>
                    </Modal.Actions>
                </Modal>
            </TableCell>
        </TableRow>
    )
}


