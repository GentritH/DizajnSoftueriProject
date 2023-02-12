import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import NjesiaListItem from "./NjesiaListItem";


export default observer(function NjesiaList(){
    
    const {njesiaStore} =  useStore();
    
    const { njesiteById} =  njesiaStore;

    return (
        <Segment.Group>
            <Segment className="njesitelist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='5' >Emri i njesise</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Pershkrimi i njesise</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {njesiteById.map(njesia => (
                            <NjesiaListItem key={njesia.id} njesia={njesia} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})