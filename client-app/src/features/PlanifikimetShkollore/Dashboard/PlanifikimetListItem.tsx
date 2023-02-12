import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { planifikimet } from "../../../app/models/Planifikimet";
import { useStore } from "../../../app/stores/store";

interface Props{
    planifikimet: planifikimet
}

export default function PlanifikimetListItem({planifikimet}: Props) {
     
    const {planifikimetStore,lendaStore,klasatStore} =  useStore();
    
    const {deletePlanifikimet, loading} =  planifikimetStore;


    const [target, setTarget] = useState('');

    function handleDeleteLenda(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deletePlanifikimet(id);
    }


    return (
        <TableRow key={planifikimet.id}>
            <TableCell>{planifikimet.llojiPlanifikimit}</TableCell>
            <TableCell>{planifikimet.vitiShkollor}</TableCell>
            <TableCell>{lendaStore.getEmriLendestById(planifikimet.lendaId)}</TableCell>
            <TableCell>{klasatStore.getEmriKlasestById(planifikimet.klasaId)}</TableCell>
            <TableCell>
                <Button
                   onClick={() => planifikimetStore.selectPlanifikimet(planifikimet.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={planifikimet.id}
                    loading={loading && target === planifikimet.id}
                    onClick={(e) => handleDeleteLenda(e, planifikimet.id)}
                    floated='right'
                    content='Delete' color='blue' />
            </TableCell>
        </TableRow>
    )
}