import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { Lenda } from "../../../app/models/lenda";
import { useStore } from "../../../app/stores/store";

interface Props{
    lenda: Lenda
}

export default function LendaListItem({lenda}: Props) {
     
    const {lendaStore} =  useStore();
    
    const {deleteLenda, loading} =  lendaStore;


    const [target, setTarget] = useState('');

    function handleDeleteLenda(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteLenda(id);
    }


    return (
        <TableRow key={lenda.id}>
            <TableCell >{lenda.emriLendes}</TableCell>
            <TableCell>{lenda.pershkrimi}</TableCell>
            <TableCell>
                <Button
                   onClick={() => lendaStore.selectLenda(lenda.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={lenda.id}
                    loading={loading && target === lenda.id}
                    onClick={(e) => handleDeleteLenda(e, lenda.id)}
                    floated='right'
                    content='Delete' color='red' />
            </TableCell>
        </TableRow>
    )
}