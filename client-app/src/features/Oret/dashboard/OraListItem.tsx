import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { Ora } from "../../../app/models/ora";
import { useStore } from "../../../app/stores/store";

interface Props{
    ora: Ora
}

export default function OraListItem({ora}: Props) {
     
    const {oraStore,lendaStore,njesiaStore} =  useStore();
    
    const {deleteOra, loading} = oraStore;


    const [target, setTarget] = useState('');

    function handleDeleteOra(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteOra(id);
    }


    return (
        <TableRow key={ora.id}>
            <TableCell>{ora.fusha}</TableCell>
            <TableCell>{ora.oramesimore}</TableCell>
            <TableCell>{ora.plani}</TableCell>
            <TableCell>{lendaStore.getEmriLendestById(ora.lendaId)}</TableCell>
            <TableCell>{njesiaStore.getEmriNjesiseById(ora.njesiaId)}</TableCell>
            <TableCell>{ora.koment}</TableCell>
            <TableCell>
                <Button
                   onClick={() => oraStore.selectOra(ora.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={ora.id}
                    loading={loading && target === ora.id}
                    onClick={(e) => handleDeleteOra(e, ora.id)}
                    floated='right'
                    content='Delete' color='red' />
            </TableCell>
        </TableRow>
    )
}