
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Klasat } from "../models/klasat";

export default class KlasatStore {
    klasatF: Klasat[] = [];
    klasatRegistry = new Map<string, Klasat>();
    selectedKlasat: Klasat | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor() {
        makeAutoObservable(this);

    }

   
    get klasatFCount(){
        return this.klasatRegistry.size;
    }

    get klasatFById(){
        return Array.from(this.klasatRegistry.values()).sort();
    }

    public getEmriKlasestById = (id: string) => {
        return this.klasatRegistry.get(id)?.emriKlases;
    };

    get groupedKlasatF(){
        return Object.entries(
            this.klasatFById.reduce((klasatF) =>{
                // const id = format(klasat.id!,0|1|2|undefined);
                // klasatF[id] = klasatF[id] ? [...klasatF[id],klasat] :[klasat];
                return klasatF;
            },{} as {[key:string]:Klasat[]})
        )
    }

    selectKlasat = (id: string) => {
        this.selectedKlasat = this.klasatRegistry.get(id);
    }

    cancelSelectedKlasat = () => {
        this.selectedKlasat = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectKlasat(id) : this.cancelSelectedKlasat();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadKlasatF = async () => {
        this.loadingInitial = true;
        try {
            const klasatF = await agent.KlasatF.list(); //na e kthen listen e aktiviteteve
            klasatF.forEach(klasat => {
                this.setKlasat(klasat);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    loadKlasat = async (id: string) => {
        let klasat = this.getKlasat(id);
        if (klasat) {
            this.selectedKlasat = klasat;
            return klasat;
        } else {
            this.loadingInitial = true;
            try {
                klasat = await agent.KlasatF.details(id);
                this.setKlasat(klasat);
                runInAction(() => {
                    this.selectedKlasat = klasat;
                })
                this.setLoadingInitial(false);
                return klasat;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setKlasat = (klasat: Klasat) => {
        this.klasatRegistry.set(klasat.id, klasat);
    }

    private getKlasat = (id: string) => {
        return this.klasatRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createKlasat = async (klasat: Klasat) => {
        this.loading = true;

        try {
            await agent.KlasatF.create(klasat);
            runInAction(() => {
                this.klasatRegistry.set(klasat.id, klasat);
                this.selectedKlasat = klasat;
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

    updateKlasat = async (klasat: Klasat) => {
        this.loading = true;
        try {
            await agent.KlasatF.update(klasat);
            runInAction(() => {
                this.klasatRegistry.set(klasat.id, klasat);
                this.selectedKlasat = klasat;
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

    deleteKlasat = async (id: string) => {
        this.loading = true;
        try {
            await agent.KlasatF.delete(id);
            runInAction(() => {
                this.klasatRegistry.delete(id);
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