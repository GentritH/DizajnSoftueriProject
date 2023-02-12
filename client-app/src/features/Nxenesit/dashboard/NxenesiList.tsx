import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import NxenesiListItem from "./NxenesiListItem";

export default observer(function NxenesiList(){
    
    const {nxenesiStore} =  useStore();
    
    const { NxenesiById} =  nxenesiStore;

    return (
        <Segment.Group>
            <Segment className="nxenesiList">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='5'>Emri</Table.HeaderCell>
                            <Table.HeaderCell width='4'>Mbiemri</Table.HeaderCell>
                            <Table.HeaderCell width='4'>Username</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Klasa</Table.HeaderCell>
                            <Table.HeaderCell width='8'>EmriPrindit</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Email</Table.HeaderCell>
                            {/* <Table.HeaderCell width='9'>NumriTelefonit</Table.HeaderCell> */}
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {NxenesiById.map(nxenesit => (
                            <NxenesiListItem key={nxenesit.id} nxenesi={nxenesit} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>
        </Segment.Group>

    )
})