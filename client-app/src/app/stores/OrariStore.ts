import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Orari } from "../models/orari";


export default class OrariStore {
  oraret: Orari[] = [];
  oraretRegistry = new Map<string, Orari>();
  selectedOrari: Orari | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get getOraret() {
    return Array.from(this.oraretRegistry.values());
  }

  get OrariById(){
    return Array.from(this.oraretRegistry.values()).sort();
}
public getOrariL = (id: string) => {
  return this.oraretRegistry.get(id)?.enjte1;
};
  get groupedOraret(){
    return Object.entries(
        this.OrariById.reduce((oraret) =>{
            // const id = format(lenda.id!,0|1|2|undefined);
            // lendet[id] = lendet[id] ? [...lendet[id],lenda] :[lenda];
            return oraret;
        },{} as {[key:string]:Orari[]})
    )
}

  loadOraret = async () => {
    try {
      const oraret = await agent.Oraret.list();

      oraret.forEach((orari) => {
        this.setOrari(orari);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
  selectOrari = (id: string) => {
    this.selectedOrari = this.oraretRegistry.get(id);
  };
  cancelSelectedOrari = () => {
    this.selectedOrari = undefined;
  };
  openForm = (id?: string) => {
    id ? this.selectOrari(id) : this.cancelSelectedOrari();
    this.editMode = true;
  };
  closeForm = () => {
    this.editMode = false;
  };

  createOrari = async (orari: Orari, LendaId: string, KlasaId: string) => {
    this.loading = true;
    // orari.id = uuid();
    try {
      await agent.Oraret.create(orari,KlasaId,LendaId);
      runInAction(() => {
        this.oraretRegistry.set(orari.id, orari);
        this.selectedOrari = orari;
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
  
  updateOrari = async (orari: Orari) => {
    this.loading = true;
    try {
      await agent.Oraret.update(orari);
      runInAction(() => {
        this.oraretRegistry.set(orari.id, orari);
        this.selectedOrari = orari;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
  deleteOrari = async (id: string) => {
    this.loading = true;
    try {
      await agent.Oraret.delete(id);
      runInAction(() => {
        this.oraretRegistry.delete(id);
        if (this.selectedOrari?.id === id) this.cancelSelectedOrari();
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
  

  loadOrari = async (id: string) => {
    let orari = this.getOrari(id);
    if (orari) {
        this.selectedOrari = orari;
        return orari;
    } else {
        this.loadingInitial = true;
        try {
            orari = await agent.Oraret.details(id);
            this.setOrari(orari);
            runInAction(() => {
                this.selectedOrari = orari;
            })
            this.setLoadingInitial(false);
            return orari;

        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }
}


  private setOrari = (orari: Orari) => {
    this.oraretRegistry.set(orari.id, orari);
  };

  private getOrari = (id: string) => {
    return this.oraretRegistry.get(id);
  };
}
