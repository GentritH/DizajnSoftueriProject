import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import RaportetListItem from "./RaportetListItem";



export default observer(function RaportetList(){
    
    const {raportetStore,nxenesiStore} =  useStore();
    
    const { RaportetById} =  raportetStore;
    const { nxenesit} =  nxenesiStore;

    return (
        <Segment.Group>
            <Segment className="lendetlist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                           
                           
                            <Table.HeaderCell width='8'>Nxenesi</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Klasa</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Lenda</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Muaji</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Java</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                     
                      {RaportetById.filter(nxenesi => nxenesi.nxenesiId === nxenesit?.id).map(planet => (
                             <RaportetListItem key={planet.id} raporti={planet} />
                         ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})



