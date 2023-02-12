import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../api/agent";
import { Stafi, StafiFormValues } from "../models/UserStafiAkademik";
import { store } from "./store";

export default class StafiAkademikStore {
    stafi: Stafi | null = null;
    nxenesiSelected: Stafi | null = null;
    stafiRegistry = new Map<String, Stafi>();
    selectedstafi: Stafi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;
    

    constructor() {
        makeAutoObservable(this)
    }
    getUser = async () => {
        try {
            const user = await agent.StafiAccount.current();
            runInAction(() => this.stafi = user);
        } catch (error) {
            console.log(error);
        }
    }
    
    get isLoggedIn() {
        return !!this.stafi;
    }
   
    get StafiCount(){
        return this.stafiRegistry.size;
    }


    get StafiById(){
        return Array.from(this.stafiRegistry.values()).sort();
    }

    get groupedStafi(){
        return Object.entries(
            this.StafiById.reduce((stafi) =>{
                // const id = format(lenda.id!,0|1|2|undefined);
                // lendet[id] = lendet[id] ? [...lendet[id],lenda] :[lenda];
                return stafi;
            },{} as {[key:string]:Stafi[]})
        )
    }
    
    login = async (creds: StafiFormValues) => {
        try {
            const stafiakademik = await agent.StafiAccount.login(creds);
            store.commonStore.setToken(stafiakademik.token);
            runInAction(() => this.stafi = stafiakademik);
            history.push('/Stafi');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }
    private setStafi = (stafi: Stafi) => {
        this.stafiRegistry.set(stafi.id, stafi);
    }
    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.stafi = null;
        history.push('/');
    }

    getStafin = async () => {
        try {
            const user = await agent.StafiAccount.current();
            runInAction(() => this.stafi = user);
        } catch (error) {
            console.log(error);
        }
    }
    
    register = async (creds: StafiFormValues) => {
        try {
            const user = await agent.StafiAccount.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.stafi = user);
            history.push('/Stafi/StafiAkademik');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    updateStafi = async (stafii: Stafi) => {
        this.loading = true;
        try {
            await agent.StafiAkademikk.update(stafii);
            runInAction(() => {
                this.stafiRegistry.set(stafii.id, stafii);
                this.selectedstafi = stafii;
                this.editMode = false;
                this.loading = false

            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })

        }
    }





    

    
    selectStafi = (id: string) => {
        this.selectedstafi = this.stafiRegistry.get(id);
    }

    getStafiFromId = async (id: string) => {
        console.log(id)
        return this.stafiRegistry.get(id);
    }


    loadStafin = async () => {
        this.loadingInitial = true;
        try {
            const stafi = await agent.StafiAkademikk.list(); //na e kthen listen e aktiviteteve
            stafi.forEach(stafii => {
                this.setStafi(stafii);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    private getStafi = (id: string) => {
        return this.stafiRegistry.get(id);
    }
    loadStafi = async (id: string) => {
        let stafi = this.getStafi(id);
        if (stafi) {
            this.selectedstafi = stafi;
            return stafi;
        } else {
            this.loadingInitial = true;
            try {
                stafi = await agent.StafiAkademikk.details(id);
                this.setStafi(stafi);
                runInAction(() => {
                    this.selectedstafi = stafi;
                })
                this.setLoadingInitial(false);
                return stafi;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    
    cancelSelectedStafi = () => {
        this.selectedstafi = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectStafi(id) : this.cancelSelectedStafi();
        this.editMode = true;
    }

    openForm2 = (id?: string) => {
        id ? this.selectStafi(id) : this.cancelSelectedStafi();
        this.editMode = true;
    }

    closeForm = () => {
     
        this.editMode = false;
    }

  

    deleteStafi = async (id: string) => {
        this.loading = true;
        try {
            await agent.StafiAkademikk.delete(id);
            runInAction(() => {
                this.stafiRegistry.delete(id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}


