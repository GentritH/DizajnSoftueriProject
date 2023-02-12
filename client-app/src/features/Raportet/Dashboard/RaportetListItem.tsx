import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { raportet } from "../../../app/models/Raportet";
import { useStore } from "../../../app/stores/store";

interface Props{
    raporti: raportet
}

export default function RaportetListItem({raporti}: Props) {
     
    const {raportetStore,lendaStore,klasatStore,nxenesiStore} =  useStore();
    
    const {deleteRaportet, loading} =  raportetStore;


    const [target, setTarget] = useState('');

    function handleDeleteRaporti(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteRaportet(id);
    }


    return (
        <TableRow key={raporti.id}>
           <TableCell>{nxenesiStore.getEmriNxenesitById(raporti.nxenesiId)} {nxenesiStore.getMbiemriNxenesitById(raporti.nxenesiId)}</TableCell>
            <TableCell>{klasatStore.getEmriKlasestById(raporti.klasaId)}</TableCell>
            <TableCell>{lendaStore.getEmriLendestById(raporti.lendaId)}</TableCell>
            <TableCell>{raporti.muaji}</TableCell>
            <TableCell>{raporti.java}</TableCell>
            <TableCell>
                <Button
                   onClick={() => raportetStore.selectRaportet(raporti.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={raporti.id}
                    loading={loading && target === raporti.id}
                    onClick={(e) => handleDeleteRaporti(e, raporti.id)}
                    floated='right'
                    content='Delete' color='red' />
            </TableCell>
        </TableRow>
    )
}