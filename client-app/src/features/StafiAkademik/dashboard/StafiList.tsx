import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import StafiListItem from "./StafiListItem";

export default observer(function LendaList(){
    
    const {StafiAkademikStore} =  useStore();
    
    const { StafiById} =  StafiAkademikStore;

    return (
        <Segment.Group>
            <Segment className="stafilist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='5'>Emri</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Mbiemri</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Roli</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {StafiById.map(stafi => (
                            <StafiListItem key={stafi.id} stafi={stafi} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})