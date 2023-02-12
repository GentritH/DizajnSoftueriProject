import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../stores/store";
import NavNxenesi from "./NavNxenesi";



export default observer(function NxenesiPage() {
    
    const { nxenesiStore,  commonStore } = useStore();
    useEffect(() => {
        if (commonStore.token) {
            nxenesiStore.getUserNxenesi().finally(() => commonStore.setAppLoaded());
        } else {
            commonStore.setAppLoaded();
        }
    }, [commonStore, nxenesiStore])


    return(
        <NavNxenesi />
    )
})