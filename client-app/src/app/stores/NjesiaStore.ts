import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Njesia } from "../models/njesia";

export default class NjesiaStore {
    njesite: Njesia[] = [];
    njesiaRegistry = new Map<string, Njesia>();
    selectedNjesia: Njesia | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor() {
        makeAutoObservable(this);

    }
   
    get njesiteCount(){
        return this.njesiaRegistry.size;
    }

    public getEmriNjesiseById = (id: string) => {
        return this.njesiaRegistry.get(id)?.emriNjesise;
    };
    

    get njesiteById(){
        return Array.from(this.njesiaRegistry.values()).sort();
    }

    get groupedNjesite(){
        return Object.entries(
            this.njesiteById.reduce((njesite) =>{
                // const id = format(njesia.id!,0|1|2|undefined);
                // njesite[id] = njesite[id] ? [...njesite[id],njesia] :[njesia];
                return njesite;
            },{} as {[key:string]:Njesia[]})
        )
    }

    selectNjesia = (id: string) => {
        this.selectedNjesia = this.njesiaRegistry.get(id);
    }

    cancelSelectedNjesia = () => {
        this.selectedNjesia = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectNjesia(id) : this.cancelSelectedNjesia();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadNjesite = async () => {
        this.loadingInitial = true;
        try {
            const njesite = await agent.Njesite.list(); 
            njesite.forEach(njesia => {
                this.setNjesia(njesia);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    loadNjesia = async (id: string) => {
        let njesia = this.getNjesia(id);
        if (njesia) {
            this.selectedNjesia = njesia;
            return njesia;
        } else {
            this.loadingInitial = true;
            try {
                njesia = await agent.Njesite.details(id);
                this.setNjesia(njesia);
                runInAction(() => {
                    this.selectedNjesia = njesia;
                })
                this.setLoadingInitial(false);
                return njesia;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setNjesia = (njesia: Njesia) => {
        this.njesiaRegistry.set(njesia.id, njesia);
    }

    private getNjesia = (id: string) => {
        return this.njesiaRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createNjesia = async (njesia: Njesia) => {
        this.loading = true;

        try {
            await agent.Njesite.create(njesia);
            runInAction(() => {
                this.njesiaRegistry.set(njesia.id, njesia);
                this.selectedNjesia = njesia;
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

    updateNjesia = async (njesia: Njesia) => {
        this.loading = true;
        try {
            await agent.Njesite.update(njesia);
            runInAction(() => {
                this.njesiaRegistry.set(njesia.id, njesia);
                this.selectedNjesia = njesia;
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

    deleteNjesia = async (id: string) => {
        this.loading = true;
        try {
            await agent.Njesite.delete(id);
            runInAction(() => {
                this.njesiaRegistry.delete(id);
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