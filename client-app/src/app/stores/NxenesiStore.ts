import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { NxenesiFormValues, Nxenesit } from "../models/UserNxenesi";
import { store } from "./store";
import { history } from "../..";
import { v4 as uuid } from "uuid";


export default class NxenesiStore {
    nxenesit: Nxenesit | null = null;
    nxenesiRegistry = new Map<String, Nxenesit>();
    selectedNxenesi: Nxenesit | undefined =  undefined;
    editMode =  false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    getUserNxenesi = async () => {
        try{
            const user = await agent.NxenesiAccount.current();
            runInAction(() => this.nxenesit = user);
        }catch(error){
            console.log(error);
        }
        
    }
    

    get isLoggedIn(){
        return !!this.nxenesit;
    }

    get NxenesiCount(){
        return this.nxenesiRegistry.size;
    }

    public getEmriNxenesitById = (id: string) => {
        return this.nxenesiRegistry.get(id)?.emri;
    };

    public getMbiemriNxenesitById = (id: string) => {
        return this.nxenesiRegistry.get(id)?.mbiemri;
    };

    get NxenesiById(){
        return Array.from(this.nxenesiRegistry.values()).sort();
    }

    get groupedNxenesit(){
        return Object.entries(
            this.NxenesiById.reduce((nxenesit) => {
                return nxenesit;
            }, {} as {[key:string]:Nxenesit[]})
        )
    }

    login = async(creds: NxenesiFormValues) => {
        try{
            const nxenesi = await agent.NxenesiAccount.login(creds);
            store.commonStore.setToken(nxenesi.token);
            runInAction(() => this.nxenesit = nxenesi);
            history.push('/Nxenesi');
            store.modalStore.closeModal();
        }catch(error){
            throw error;
        }
    }

    private setNxenesi = (nxenesit: Nxenesit) => {
        this.nxenesiRegistry.set(nxenesit.id, nxenesit);
    }
    
    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.nxenesit = null;
        history.push('/');
    }

    getNxenesit = async() =>{
        try{
            const user = await agent.NxenesiAccount.current();
            runInAction(() => this.nxenesit = user);
        }catch(error){
            console.log(error);
        }
    }

    getNxenesin = async () => {
      
  
          try {
             const nxenesit =  await agent.NxenesiAccount.current();
            
   
  
          } catch(error) {
              console.log(error);
          }

          return this.nxenesit?.id
        
         
      }
  
    register = async(creds: NxenesiFormValues) => {
        try{
            const user = await agent.NxenesiAccount.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.nxenesit = user);
            history.push('/Stafi/Nxenesit');
            store.modalStore.closeModal();
        }catch(error){
            throw error;
        }
    }

    updateNxenesit = async(nxenesi: Nxenesit) => {
        this.loading = true;
        try{
            await agent.Nxenesitt.update(nxenesi);
            runInAction(() => {
                this.nxenesiRegistry.set(nxenesi.id, nxenesi);
                this.selectedNxenesi = nxenesi;
                this.editMode = false;
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    selectNxenesit = (id: string) => {
        this.selectedNxenesi =  this.nxenesiRegistry.get(id);
    }

    getNxenesiFromId = async(id: string) => {
        console.log(id)
        return this.nxenesiRegistry.get(id);
    }

    loadNxenesit = async() => {
        this.loadingInitial = true;
        try{
            const nxenesi = await agent.Nxenesitt.list();
            nxenesi.forEach(nxenesit =>{
                this.setNxenesi(nxenesit);
            })
            this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

     getNxenesi = (id: string) => {
        return this.nxenesiRegistry.get(id);
    }

    loadNxenesi = async(id: string) => {
        let nxenesi = this.getNxenesi(id);
        if(nxenesi){
            this.selectedNxenesi =  nxenesi;
            return nxenesi;
        }else{
            this.loadingInitial = true;
            try{
                nxenesi = await agent.Nxenesitt.details(id);
                this.setNxenesi(nxenesi);
                runInAction(() => {
                    this.selectedNxenesi = nxenesi;
                })
                this.setLoadingInitial(false);
                return nxenesi;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    createNxenesi = async (nxenesi: Nxenesit) => {
        this.loading = true;
        nxenesi.id = uuid();
        try {
          await agent.Nxenesitt.create(nxenesi);
          runInAction(() => {
            this.nxenesiRegistry.set(nxenesi.id, nxenesi);
            this.selectedNxenesi = nxenesi;
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

    setLoadingInitial = (state:boolean) => {
        this.loadingInitial = state;
    }

    cancelSelectedNxenesi = () => {
        this.selectedNxenesi = undefined;
    }

    openForm = (id?: string) => {
        id? this.selectNxenesit(id) : this.cancelSelectedNxenesi();
        this.editMode =  true;
    }

    openForm2 = (id?: string) => {
        id? this.selectNxenesit(id) : this.cancelSelectedNxenesi();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    deleteNxenesi = async(id: string) => {
        this.loading = true;
        try{
            await agent.Nxenesitt.delete(id);
            runInAction(() => {
                this.nxenesiRegistry.delete(id);
                history.push('/Stafi/Nxenesit');
                if(this.selectedNxenesi?.id === id) this.cancelSelectedNxenesi();
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}