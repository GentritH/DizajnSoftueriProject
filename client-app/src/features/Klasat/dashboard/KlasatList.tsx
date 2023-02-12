import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import KlasatListItem from "./KlasatListItem";

export default observer(function KlasatList(){
    
    const {klasatStore} =  useStore();
    
    const {klasatFById} =  klasatStore;

    return (
        <Segment.Group>
            <Segment className="klasatlist">
                <Table  celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell >Emri i Klases</Table.HeaderCell>
                            <Table.HeaderCell >TestInput</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {klasatFById.map(klasat => (
                            <KlasatListItem key={klasat.id} klasat={klasat} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})