import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { Njesia } from "../../../app/models/njesia";
import { useStore } from "../../../app/stores/store";

interface Props{
    njesia: Njesia
}

export default function NjesiaListItem({njesia}: Props) {
     
    const {njesiaStore} =  useStore();
    
    const {deleteNjesia, loading} =  njesiaStore;


    const [target, setTarget] = useState('');

    function handleDeleteNjesia(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteNjesia(id);
    }


    return (
        <TableRow key={njesia.id}>
            <TableCell >{njesia.emriNjesise}</TableCell>
            <TableCell>{njesia.pershkrimi}</TableCell>
            <TableCell>
                <Button
                   onClick={() => njesiaStore.selectNjesia(njesia.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={njesia.id}
                    loading={loading && target === njesia.id}
                    onClick={(e) => handleDeleteNjesia(e, njesia.id)}
                    floated='right'
                    content='Delete' color='red' />
            </TableCell>
        </TableRow>
    )
}