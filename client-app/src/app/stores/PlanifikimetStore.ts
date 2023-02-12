import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { planifikimet } from "../models/Planifikimet";



export default class PlanifikimetStore {
    
    planifikimet: planifikimet[] = [];
    planifikimetRegistry = new Map<string, planifikimet>();
    selectedPlanifikimet: planifikimet | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

   

    constructor() {
        makeAutoObservable(this);
        // ".bound" e ben bind function setTitle per classen LendaStore

    }
    //nese e fshijme .bound edhe tek funksioni e bejme arrow function atehere funksionon
   
    get planifikimetCount(){
        return this.planifikimetRegistry.size;
    }

    get planifikimetById(){
        return Array.from(this.planifikimetRegistry.values()).sort();
    }

    get groupedPlanifikimet(){
        return Object.entries(
            this.planifikimetById.reduce((planifikimet) =>{
                // const id = format(lenda.id!,0|1|2|undefined);
                // lendet[id] = lendet[id] ? [...lendet[id],lenda] :[lenda];
                return planifikimet;
            },{} as {[key:string]:planifikimet[]})
        )
    }

    selectPlanifikimet = (id: string) => {
        this.selectedPlanifikimet = this.planifikimetRegistry.get(id);
    }

    cancelSelectedPlanifikimet = () => {
        this.selectedPlanifikimet = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectPlanifikimet(id) : this.cancelSelectedPlanifikimet();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadPlanifikimet = async () => {
        this.loadingInitial = true;
        try {
            const plan = await agent.Planifikimet.list(); //na e kthen listen e aktiviteteve
            plan.forEach(planet => {
                
                this.setPlanifikimet(planet);
                
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    loadPlanin = async (id: string) => {
        let plani = this.getPlanifikimet(id);
        if (plani) {
            this.selectedPlanifikimet = plani;
            return plani;
        } else {
            this.loadingInitial = true;
            try {
                plani = await agent.Planifikimet.details(id);
                this.setPlanifikimet(plani);
                runInAction(() => {
                    this.selectedPlanifikimet = plani;
                })
                this.setLoadingInitial(false);
                return plani;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setPlanifikimet = (plani: planifikimet) => {
        this.planifikimetRegistry.set(plani.id, plani);
    }

    private getPlanifikimet = (id: string) => {
        return this.planifikimetRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }



    createPlanifikimet = async (plani: planifikimet,LendaId: string, KlasaId: string) => {
        this.loading = true;

        try {
            await agent.Planifikimet.create(plani,LendaId,KlasaId);
            runInAction(() => {
                this.planifikimetRegistry.set(plani.id, plani);
                this.selectedPlanifikimet = plani;
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

    updatePlanifikimet = async (plani: planifikimet) => {
        this.loading = true;
        try {
            await agent.Planifikimet.update(plani);
            runInAction(() => {
                this.planifikimetRegistry.set(plani.id, plani);
                this.selectedPlanifikimet = plani;
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

    deletePlanifikimet = async (id: string) => {
        this.loading = true;
        try {
            await agent.Planifikimet.delete(id);
            runInAction(() => {
                this.planifikimetRegistry.delete(id);
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