import React, { SyntheticEvent, useState } from "react";
// import { Button, Table, TableCell, TableRow } from "semantic-ui-react";
// import { Orari } from "../../../app/models/orari";
// import { useStore } from "../../../app/stores/store";

// interface Props {
//     oraret: Orari
// }

// export default function NxenesiListItem({ oraret }: Props) {

//     const { orariStore } = useStore();

//     const { deleteOrari, loading } = orariStore;


//     const [target, setTarget] = useState('');




//     function handleDeleteOrari(e: SyntheticEvent<HTMLButtonElement>, id: string) {
//         setTarget(e.currentTarget.name);
//         deleteOrari(id);
//     }

//     return (
//         <TableRow key={oraret.id}>
//             <Table.Cell>1</Table.Cell>
//                 <Table.Cell>{oraret.hene1}</Table.Cell>
//                 <Table.Cell>{oraret.marte1}</Table.Cell>
//                 <Table.Cell>{oraret.merkure1}</Table.Cell>
//                 <Table.Cell>{oraret.enjte1}</Table.Cell>
//                 <Table.Cell>{oraret.premte1}</Table.Cell>
//             <TableCell>
//             <Table.Row key={oraret.id}>
//                 <Table.Cell>2</Table.Cell>
//                 <Table.Cell>{oraret.hene2}</Table.Cell>
//                 <Table.Cell>{oraret.marte2}</Table.Cell>
//                 <Table.Cell>{oraret.merkure2}</Table.Cell>
//                 <Table.Cell>{oraret.enjte2}</Table.Cell>
//                 <Table.Cell>{oraret.premte2}</Table.Cell>
//               </Table.Row>
//               <Table.Row key={oraret.id}>
//                 <Table.Cell>3</Table.Cell>
//                 <Table.Cell>{oraret.hene3}</Table.Cell>
//                 <Table.Cell>{oraret.marte3}</Table.Cell>
//                 <Table.Cell>{oraret.merkure3}</Table.Cell>
//                 <Table.Cell>{oraret.enjte3}</Table.Cell>
//                 <Table.Cell>{oraret.premte3}</Table.Cell>
//               </Table.Row>
//               <Table.Row key={oraret.id}>
//                 <Table.Cell>4</Table.Cell>
//                 <Table.Cell>{oraret.hene4}</Table.Cell>
//                 <Table.Cell>{oraret.marte4}</Table.Cell>
//                 <Table.Cell>{oraret.merkure4}</Table.Cell>
//                 <Table.Cell>{oraret.enjte4}</Table.Cell>
//                 <Table.Cell>{oraret.premte4}</Table.Cell>
//               </Table.Row>
//               <Table.Row key={oraret.id}>
//                 <Table.Cell>5</Table.Cell>
//                 <Table.Cell>{oraret.hene5}</Table.Cell>
//                 <Table.Cell>{oraret.marte5}</Table.Cell>
//                 <Table.Cell>{oraret.merkure5}</Table.Cell>
//                 <Table.Cell>{oraret.enjte5}</Table.Cell>
//                 <Table.Cell>{oraret.premte5}</Table.Cell>
//               </Table.Row>
//               <Table.Row key={oraret.id}>
//                 <Table.Cell>6</Table.Cell>
//                 <Table.Cell>{oraret.hene6}</Table.Cell>
//                 <Table.Cell>{oraret.marte6}</Table.Cell>
//                 <Table.Cell>{oraret.merkure6}</Table.Cell>
//                 <Table.Cell>{oraret.enjte6}</Table.Cell>
//                 <Table.Cell>{oraret.premte6}</Table.Cell>
//               </Table.Row>
//             </TableCell>
//             <TableCell>
//             <Button
//               onClick={() => orariStore.selectOrari(oraret.id)}
//               floated="right"
//               content="View"
//               color="blue"
//             />
//             <Button
//               name={oraret.id}
//               loading={loading && target === oraret.id}
//               onClick={(e) => handleDeleteOrari(e, oraret.id)}
//               floated="right"
//               content="Delete"
//               color="red"
//             />
                
//             </TableCell>
//         </TableRow>
//     )
// }


