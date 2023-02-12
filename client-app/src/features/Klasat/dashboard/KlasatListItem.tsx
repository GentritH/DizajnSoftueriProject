import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { Klasat } from "../../../app/models/klasat";
import { useStore } from "../../../app/stores/store";

interface Props{
    klasat: Klasat
}

export default function KlasatListItem({klasat}: Props) {
     
    const {klasatStore} =  useStore();
    
    const {deleteKlasat, loading} =  klasatStore;


    const [target, setTarget] = useState('');

    function handleDeleteKlasat(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteKlasat(id);
    }


    return (
        <TableRow key={klasat.id}>
            <TableCell >{klasat.emriKlases}</TableCell>
            <TableCell >{klasat.test}</TableCell>
            <TableCell>
                <Button
                   onClick={() => klasatStore.selectKlasat(klasat.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={klasat.id}
                    loading={loading && target === klasat.id}
                    onClick={(e) => handleDeleteKlasat(e, klasat.id)}
                    floated='right'
                    content='Delete' color='red' />
            </TableCell>
        </TableRow>
    )
}