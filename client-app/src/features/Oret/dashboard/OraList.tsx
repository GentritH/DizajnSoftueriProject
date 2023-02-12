import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import OraListItem from "./OraListItem";


export default observer(function OraList(){
    
    const {oraStore} =  useStore();
    
    const { oretById} =  oraStore;

    return (
        <Segment.Group>
            <Segment className="oralist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='8'>Fusha kurrikulare</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Ora mesimore</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Plani mesimor</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Lenda</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Njesia</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Koment</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {oretById.map(ora => (
                            <OraListItem key={ora.id} ora={ora} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})