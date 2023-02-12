import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LendaListItem from "./LendaListItem";

export default observer(function LendaList(){
    
    const {lendaStore} =  useStore();
    
    const { lendetById} =  lendaStore;

    return (
        <Segment.Group>
            <Segment className="lendetlist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='5' >Emri i Lendes</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Pershkrimi i Lendes</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {lendetById.map(lenda => (
                            <LendaListItem key={lenda.id} lenda={lenda} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})