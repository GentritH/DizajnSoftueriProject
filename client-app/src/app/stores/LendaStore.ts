import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Lenda } from "../models/lenda";

export default class LendaStore {
    lendet: Lenda[] = [];
    lendaRegistry = new Map<string, Lenda>();
    selectedLenda: Lenda | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor() {
        makeAutoObservable(this);
        // ".bound" e ben bind function setTitle per classen LendaStore

    }
    //nese e fshijme .bound edhe tek funksioni e bejme arrow function atehere funksionon
   
    get lendetCount(){
        return this.lendaRegistry.size;
    }

    public getEmriLendestById = (id: string) => {
        return this.lendaRegistry.get(id)?.emriLendes;
    };

    public OrariLendes = (id: string) => {
        return this.lendaRegistry.get(id)?.emriLendes;
    };
    
    get lendetById(){
        return Array.from(this.lendaRegistry.values()).sort();
    }

    get groupedLendet(){
        return Object.entries(
            this.lendetById.reduce((lendet) =>{
                // const id = format(lenda.id!,0|1|2|undefined);
                // lendet[id] = lendet[id] ? [...lendet[id],lenda] :[lenda];
                return lendet;
            },{} as {[key:string]:Lenda[]})
        )
    }

    selectLenda = (id: string) => {
        this.selectedLenda = this.lendaRegistry.get(id);
    }

    cancelSelectedLenda = () => {
        this.selectedLenda = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectLenda(id) : this.cancelSelectedLenda();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadLendet = async () => {
        this.loadingInitial = true;
        try {
            const lendet = await agent.Lendet.list(); //na e kthen listen e aktiviteteve
            lendet.forEach(lenda => {
                this.setLenda(lenda);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    loadLenda = async (id: string) => {
        let lenda = this.getLenda(id);
        if (lenda) {
            this.selectedLenda = lenda;
            return lenda;
        } else {
            this.loadingInitial = true;
            try {
                lenda = await agent.Lendet.details(id);
                this.setLenda(lenda);
                runInAction(() => {
                    this.selectedLenda = lenda;
                })
                this.setLoadingInitial(false);
                return lenda;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setLenda = (lenda: Lenda) => {
        this.lendaRegistry.set(lenda.id, lenda);
    }

    private getLenda = (id: string) => {
        return this.lendaRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createLenda = async (lenda: Lenda) => {
        this.loading = true;

        try {
            await agent.Lendet.create(lenda);
            runInAction(() => {
                this.lendaRegistry.set(lenda.id, lenda);
                this.selectedLenda = lenda;
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

    updateLenda = async (lenda: Lenda) => {
        this.loading = true;
        try {
            await agent.Lendet.update(lenda);
            runInAction(() => {
                this.lendaRegistry.set(lenda.id, lenda);
                this.selectedLenda = lenda;
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

    deleteLenda = async (id: string) => {
        this.loading = true;
        try {
            await agent.Lendet.delete(id);
            runInAction(() => {
                this.lendaRegistry.delete(id);
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