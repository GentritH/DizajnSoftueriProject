import { observer } from "mobx-react-lite";
import { Segment, Table,TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import MungesaListItem from "./MungesaListItem";


export default observer(function MungesaList(){
    
    const {mungesaStore} =  useStore();
    
    const { mungesatById} =  mungesaStore;

    return (
        <Segment.Group>
            <Segment className="mungesalist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='8'>Nxenesi</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Periudha</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Mungesat me arsye</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Mungesat pa arsye</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Shenim</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {mungesatById.map(mungesa => (
                            <MungesaListItem key={mungesa.id} mungesa={mungesa} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})