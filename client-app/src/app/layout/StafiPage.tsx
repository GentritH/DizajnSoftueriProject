import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../stores/store";
import NavBar from "./NavBar";



export default observer(function NxenesiPage() {
    
    const { StafiAkademikStore,  commonStore } = useStore();
    useEffect(() => {
        if (commonStore.token) {
            StafiAkademikStore.getUser().finally(() => commonStore.setAppLoaded());
        } else {
            commonStore.setAppLoaded();
        }
    }, [commonStore, StafiAkademikStore])


    return(
        <NavBar />
    )
})