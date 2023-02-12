import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow} from "semantic-ui-react";
import { Mungesa } from "../../../app/models/mungesa";
import { useStore } from "../../../app/stores/store";

interface Props{
    mungesa: Mungesa
}

export default function MungesaListItem({mungesa}: Props) {
     
    const {mungesaStore,nxenesiStore} =  useStore();
    
    const {deleteMungesa, loading} = mungesaStore;


    const [target, setTarget] = useState('');

    function handleDeleteMungesa(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteMungesa(id);
    }


    return (
        <TableRow key={mungesa.id}>
       <TableCell>{nxenesiStore.getEmriNxenesitById(mungesa.nxenesiId)} {nxenesiStore.getMbiemriNxenesitById(mungesa.nxenesiId)}</TableCell>
            <TableCell>{mungesa.periudha}</TableCell>
            <TableCell>{mungesa.arsye}</TableCell>
            <TableCell>{mungesa.paarsye}</TableCell>
            <TableCell>{mungesa.shenim}</TableCell>
            <TableCell>
                <Button
                   onClick={() => mungesaStore.selectMungesa(mungesa.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={mungesa.id}
                    loading={loading && target === mungesa.id}
                    onClick={(e) => handleDeleteMungesa(e, mungesa.id)}
                    floated='right'
                    content='Delete' color='red' />
            </TableCell>
        </TableRow>
    )
}