import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import KlasatStore from "./KlasatStore";
import LendaStore from "./LendaStore";
import ModalStore from "./modalStore";
import MungesaStore from "./MungesaStore";
import NjesiaStore from "./NjesiaStore";
import NxenesiStore from "./NxenesiStore";
import OrariStore from "./OrariStore";
import OraStore from "./OraStore";
import PlanifikimetStore from "./PlanifikimetStore";
import RaportetStore from "./RaportetStore";
import StafiAkademikStore from "./StafiAkademikStore";
import UserStore from "./userStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    StafiAkademikStore: StafiAkademikStore;
    lendaStore: LendaStore;
    klasatStore: KlasatStore;
    planifikimetStore:PlanifikimetStore;
    nxenesiStore: NxenesiStore;
    njesiaStore: NjesiaStore;
    oraStore: OraStore;
    orariStore:OrariStore;
    raportetStore:RaportetStore;
    mungesaStore:MungesaStore
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    StafiAkademikStore: new StafiAkademikStore(),
    lendaStore: new LendaStore(),
    klasatStore: new KlasatStore(),
    planifikimetStore: new PlanifikimetStore(),
    nxenesiStore: new NxenesiStore(),
    njesiaStore: new NjesiaStore(),
    oraStore: new OraStore(),
    orariStore: new OrariStore(),
    raportetStore: new RaportetStore(),
    mungesaStore: new MungesaStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}