import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import PlanifikimetListItem from "./PlanifikimetListItem";


export default observer(function PlanifikimetList(){
    
    const {planifikimetStore,StafiAkademikStore} =  useStore();
    
    const { planifikimetById} =  planifikimetStore;
    const { stafi} =  StafiAkademikStore;

    return (
        <Segment.Group>
            <Segment className="lendetlist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            {/* <Table.HeaderCell width='5' >Klasa ID</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Lenda ID</Table.HeaderCell> */}
                           
                            <Table.HeaderCell width='8'>Lloji Planifikimit </Table.HeaderCell>
                            <Table.HeaderCell width='8'>vitiShkollor</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Lenda</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {planifikimetById.filter(planetbyUser => planetbyUser.mesimdhenes === stafi?.id).map(planet => (
                            <PlanifikimetListItem key={planet.id} planifikimet={planet} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})