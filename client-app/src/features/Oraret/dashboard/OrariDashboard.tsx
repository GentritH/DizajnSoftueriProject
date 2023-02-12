import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button, Dimmer, Grid, GridColumn, Loader } from "semantic-ui-react";

import { useStore } from "../../../app/stores/store";
import OrariForm from "../form/OrariForm";
import OrariDetails from "./OrariDetails";
import OrariList from "./OrariList";

export default observer(function OraretDashboard() {
  const { orariStore, klasatStore, lendaStore } = useStore();
  const { selectedOrari, editMode, oraretRegistry, loadOraret } = orariStore;
  const { loadLendet, lendaRegistry } = lendaStore;
  const { loadKlasatF, klasatRegistry} = klasatStore;

  useEffect(() => {
    if (oraretRegistry.size <= 1) loadOraret();
  }, [oraretRegistry.size, loadOraret])

  useEffect(() => {
    if (klasatRegistry.size <= 1) loadKlasatF();
  }, [klasatRegistry.size, loadKlasatF])

  useEffect(() => {
    if (lendaRegistry.size <= 1) loadLendet();
  }, [lendaRegistry.size, loadLendet])

  if (orariStore.loadingInitial) return <Dimmer active><Loader></Loader></Dimmer>;


  return (
    <Grid>
      <Grid.Column width="12">
        <OrariList />
      </Grid.Column>

      <GridColumn width="4">
        <Button
          onClick={() => orariStore.openForm()}
          content="Krijo Orarin"
          size="big"
          color="teal"
        />
        {selectedOrari && !editMode &&
          <OrariDetails />}
        {editMode &&
          <OrariForm />}
      </GridColumn>
    </Grid>
  );
});
