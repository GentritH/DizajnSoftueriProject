import React, { SyntheticEvent, useState } from "react";
import { Button, Header, Icon, Modal,TableCell, TableRow } from "semantic-ui-react";
import { Stafi } from "../../../app/models/UserStafiAkademik";
import { useStore } from "../../../app/stores/store";

interface Props{
    stafi: Stafi
}

export default function StafiListItem({stafi}: Props) {
     
    const {StafiAkademikStore} =  useStore();
    
    const {deleteStafi,loading} =  StafiAkademikStore;


    const [target, setTarget] = useState('');

    const [open, setOpen] = React.useState(false);


    function handleDeleteStafi(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteStafi(id);
    }

    return (
        <TableRow key={stafi.id}>
            <TableCell >{stafi.emri}</TableCell>
            <TableCell>{stafi.mbiemri}</TableCell>
            <TableCell>{stafi.roli}</TableCell>
            <TableCell>
                <Button
                   onClick={() => StafiAkademikStore.selectStafi(stafi.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
    
                        <Modal
                            closeIcon
                            open={open}
                            trigger={<Button floated="right" content='Delete' color="red"  />}
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
                                name={stafi.id}
                                loading={loading && target === stafi.id}
                                onClick={(e) => handleDeleteStafi(e, stafi.id)}
                                  color='green'>
                                     <Icon name='checkmark' /> Yes

                                </Button>
                            </Modal.Actions>
                            </Modal>


            </TableCell>
        </TableRow>
    )
}


