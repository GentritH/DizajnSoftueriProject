import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { raportet } from "../models/Raportet";


export default class RaportetStore {
    
    raportett: raportet[] = [];
    raportetRegistry = new Map<string, raportet>();
    selectedRaportet: raportet | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

   

    constructor() {
        makeAutoObservable(this);
       

    }
  
   
    get RaportetCount(){
        return this.raportetRegistry.size;
    }

 
    get RaportetById(){
        return Array.from(this.raportetRegistry.values()).sort();
    }

    get groupedRaportet(){
        return Object.entries(
            this.RaportetById.reduce((Raportet) =>{
        
                return Raportet;
            },{} as {[key:string]:raportet[]})
        )
    }

    selectRaportet = (id: string) => {
        this.selectedRaportet = this.raportetRegistry.get(id);
    }

    cancelselectedRaportet = () => {
        this.selectedRaportet = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectRaportet(id) : this.cancelselectedRaportet();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadRaportet = async () => {
        this.loadingInitial = true;
        try {
            const rap = await agent.Raportet.list(); 
            rap.forEach(planet => {
                
                this.setRaportet(planet);
                
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    loadRaportin = async (id: string) => {
        let plani = this.getRaportet(id);
        if (plani) {
            this.selectedRaportet = plani;
            return plani;
        } else {
            this.loadingInitial = true;
            try {
                plani = await agent.Raportet.details(id);
                this.setRaportet(plani);
                runInAction(() => {
                    this.selectedRaportet = plani;
                })
                this.setLoadingInitial(false);
                return plani;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setRaportet = (plani: raportet) => {
        this.raportetRegistry.set(plani.id, plani);
    }

    private getRaportet = (id: string) => {
        return this.raportetRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }



    createRaportet = async (Raporti: raportet,LendaId: string, KlasaId: string,NxenesiId: string) => {
        this.loading = true;

        try {
            await agent.Raportet.create(Raporti,LendaId,KlasaId,NxenesiId);
            runInAction(() => {
                this.raportetRegistry.set(Raporti.id, Raporti);
                this.selectedRaportet = Raporti;
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

    updateRaportet = async (Raporti: raportet) => {
        this.loading = true;
        try {
            await agent.Raportet.update(Raporti);
            runInAction(() => {
                this.raportetRegistry.set(Raporti.id, Raporti);
                this.selectedRaportet = Raporti;
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

    deleteRaportet = async (id: string) => {
        this.loading = true;
        try {
            await agent.Raportet.delete(id);
            runInAction(() => {
                this.raportetRegistry.delete(id);
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