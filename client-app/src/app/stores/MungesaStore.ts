import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Mungesa } from "../models/mungesa";



export default class MungesaStore {
    mungesat: Mungesa[] = [];
    mungesaRegistry = new Map<string, Mungesa>();
    selectedMungesa: Mungesa | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

   

    constructor() {
        makeAutoObservable(this);
    }
   
    get mungesatCount(){
        return this.mungesaRegistry.size;
    }

    get mungesatById(){
        return Array.from(this.mungesaRegistry.values()).sort();
    }

    get groupedMungesat(){
        return Object.entries(
            this.mungesatById.reduce((mungesat) =>{
                // const id = format(lenda.id!,0|1|2|undefined);
                // lendet[id] = lendet[id] ? [...lendet[id],lenda] :[lenda];
                return mungesat;
            },{} as {[key:string]:Mungesa[]})
        )
    }

    selectMungesa = (id: string) => {
        this.selectedMungesa = this.mungesaRegistry.get(id);
    }

    cancelSelectedMungesa= () => {
        this.selectedMungesa = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectMungesa(id) : this.cancelSelectedMungesa();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadMungesat = async () => {
        this.loadingInitial = true;
        try {
            const mungesat = await agent.Mungesat.list(); 
            mungesat.forEach(mungesa => {
                this.setMungesa(mungesa);
                
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    loadMungesa= async (id: string) => {
        let mungesa = this.getMungesa(id);
        if (mungesa) {
            this.selectedMungesa = mungesa;
            return mungesa;
        } else {
            this.loadingInitial = true;
            try {
                mungesa = await agent.Mungesat.details(id);
                this.setMungesa(mungesa);
                runInAction(() => {
                    this.selectedMungesa = mungesa;
                })
                this.setLoadingInitial(false);
                return mungesa;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setMungesa = (mungesa: Mungesa) => {
        this.mungesaRegistry.set(mungesa.id, mungesa);
    }

    private getMungesa= (id: string) => {
        return this.mungesaRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }



    createMungesa = async (mungesa: Mungesa,NxenesiId: string) => {
        this.loading = true;

        try {
            await agent.Mungesat.create(mungesa,NxenesiId);
            runInAction(() => {
                this.mungesaRegistry.set(mungesa.id, mungesa);
                this.selectedMungesa = mungesa;
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

    updateMungesa = async (mungesa: Mungesa) => {
        this.loading = true;
        try {
            await agent.Mungesat.update(mungesa);
            runInAction(() => {
                this.mungesaRegistry.set(mungesa.id, mungesa);
                this.selectedMungesa =mungesa;
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

    deleteMungesa = async (id: string) => {
        this.loading = true;
        try {
            await agent.Mungesat.delete(id);
            runInAction(() => {
                this.mungesaRegistry.delete(id);
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