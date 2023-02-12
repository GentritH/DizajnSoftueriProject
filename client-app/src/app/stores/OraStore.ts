import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Ora } from "../models/ora";



export default class OraStore {
    oret: Ora[] = [];
    oraRegistry = new Map<string, Ora>();
    selectedOra: Ora | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

   

    constructor() {
        makeAutoObservable(this);
    }
   
    get oretCount(){
        return this.oraRegistry.size;
    }

    get oretById(){
        return Array.from(this.oraRegistry.values()).sort();
    }

    get groupedOret(){
        return Object.entries(
            this.oretById.reduce((oret) =>{
                // const id = format(lenda.id!,0|1|2|undefined);
                // lendet[id] = lendet[id] ? [...lendet[id],lenda] :[lenda];
                return oret;
            },{} as {[key:string]:Ora[]})
        )
    }

    selectOra = (id: string) => {
        this.selectedOra = this.oraRegistry.get(id);
    }

    cancelSelectedOra= () => {
        this.selectedOra = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectOra(id) : this.cancelSelectedOra();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadOret = async () => {
        this.loadingInitial = true;
        try {
            const oret = await agent.Oret.list(); 
            oret.forEach(ora => {
                this.setOra(ora);
                
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    loadOra= async (id: string) => {
        let ora = this.getOra(id);
        if (ora) {
            this.selectedOra = ora;
            return ora;
        } else {
            this.loadingInitial = true;
            try {
                ora = await agent.Oret.details(id);
                this.setOra(ora);
                runInAction(() => {
                    this.selectedOra = ora;
                })
                this.setLoadingInitial(false);
                return ora;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setOra = (ora: Ora) => {
        this.oraRegistry.set(ora.id, ora);
    }

    private getOra= (id: string) => {
        return this.oraRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }



    createOra = async (ora: Ora,LendaId: string, NjesiaId: string) => {
        this.loading = true;

        try {
            await agent.Oret.create(ora,LendaId,NjesiaId);
            runInAction(() => {
                this.oraRegistry.set(ora.id, ora);
                this.selectedOra = ora;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);

            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateOra = async (ora: Ora) => {
        this.loading = true;
        try {
            await agent.Oret.update(ora);
            runInAction(() => {
                this.oraRegistry.set(ora.id, ora);
                this.selectedOra =ora;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteOra = async (id: string) => {
        this.loading = true;
        try {
            await agent.Oret.delete(id);
            runInAction(() => {
                this.oraRegistry.delete(id);
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