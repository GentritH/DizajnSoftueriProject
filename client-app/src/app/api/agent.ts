import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Activity } from '../models/activity';
import { User, UserFormValues } from '../models/user';
import { Stafi, StafiFormValues } from '../models/UserStafiAkademik';
import { store } from '../stores/store';
import { Lenda } from '../models/lenda';
import { Klasat } from '../models/klasat';
import { planifikimet } from '../models/Planifikimet';
import { NxenesiFormValues, Nxenesit } from '../models/UserNxenesi';
import { Njesia } from '../models/njesia';
import { Ora } from '../models/ora';
import { Orari } from '../models/orari';
import { raportet } from '../models/Raportet';
import { Mungesa } from '../models/mungesa';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response => {
    await sleep(1000);
    return response;
}, (error: AxiosError) => {
    const {data, status, config} = error.response!;
    switch (status) {
        case 400:
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                history.push('/not-found');
            }
            if (data.errors) {
                const modalStateErrors = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors.push(data.errors[key])
                    }
                }
                throw modalStateErrors.flat();
            } else {
                toast.error(data);
            }
            break;
        case 401:
            history.push('/');
            break;
        case 404:
            history.push('/not-found');
            break;
        // case 500:
        //     store.commonStore.setServerError(data);
        //     history.push('/server-error');
        //     break;
    }
    return Promise.reject(error);
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
    list: () => requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => axios.post<void>('/activities', activity),
    update: (activity: Activity) => axios.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => axios.delete<void>(`/activities/${id}`)
}

const StafiAkademikk = {
    
    list: () => requests.get<Stafi[]>('/Stafi'),
    details: (id: string) => requests.get<Stafi>(`/Stafi/${id}`),
    create: (stafi: Stafi) => axios.post<void>('/Stafi', stafi),
    update: (stafi: Stafi) => axios.put<void>(`/Stafi/${stafi.id}`, stafi),
    delete: (id: string) => axios.delete<void>(`/Stafi/${id}`)
}

const Nxenesitt = {
    list: () => requests.get<Nxenesit[]>('/Nxenesi'),
    details:(id: string) => requests.get<Nxenesit>(`/Nxenesi/${id}`),
    create: (nxenesi: Nxenesit) => axios.post<void>('/Nxenesi', nxenesi),
    update: (nxenesi: Nxenesit) => axios.put<void>(`Nxenesi/${nxenesi.id}`, nxenesi),
    delete: (id: string) => axios.delete<void>(`/Nxenesi/${id}`)
}
const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/registerstafi', user)
}



const NxenesiAccount = {
    current : () => requests.get<Nxenesit>('/nxenesiaccount/currentNxenesi'),
    login: (user : NxenesiFormValues) => requests.post<Nxenesit>('/nxenesiaccount/loginNxenesi', user),
    register: (user: NxenesiFormValues) => requests.post<Nxenesit>('/nxenesiaccount/registerNxenesi',user)

}

const StafiAccount = {
    current: () => requests.get<Stafi>('/stafiaccount/currentStafi'),
    login: (user: StafiFormValues) => requests.post<Stafi>('/stafiaccount/loginstafi', user),
    register: (user: StafiFormValues) => requests.post<Stafi>('/stafiaccount/registerstafi', user)
}

const Raportet ={
    list: () => requests.get<raportet[]>('/Raportet'),
    details: (id: string) => requests.get<raportet>(`/Raportet/${id}`),
    create: (raportet:raportet, LendaId:string,KlasaId:string,NxenesiId:string) => 
    axios.post<void>(`/Raportet/${LendaId},${KlasaId},${NxenesiId}`,raportet),
    update: (raportet:raportet) => 
    axios.put<void>(`/Raportet/${raportet.id}`,raportet),
    delete: (id: string) => axios.delete<void>(`/Raportet/${id}`)
}

const Lendet ={
    list: () => requests.get<Lenda[]>('/lendet'),
    details: (id: string) => requests.get<Lenda>(`/lendet/${id}`),
    create: (lenda:Lenda) => axios.post<void>('/lendet',lenda),
    update: (lenda:Lenda) => axios.put<void>(`/lendet/${lenda.id}`,lenda),
    delete: (id: string) => axios.delete<void>(`/lendet/${id}`)


}

const Planifikimet ={
    list: () => requests.get<planifikimet[]>('/Planifikimet'),
    details: (id: string) => requests.get<planifikimet>(`/Planifikimet/${id}`),
    create: (planifikimet:planifikimet, LendaId:string,KlasaId:string) => 
    axios.post<void>(`/Planifikimet/${LendaId},${KlasaId}`,planifikimet),
    update: (planifikimet:planifikimet) => 
    axios.put<void>(`/Planifikimet/${planifikimet.id}`,planifikimet),
    delete: (id: string) => axios.delete<void>(`/Planifikimet/${id}`)
}


const KlasatF ={
    list: () => requests.get<Klasat[]>('/klasatF'),
    details: (id: string) => requests.get<Klasat>(`/klasatF/${id}`),
    create: (klasat:Klasat) => axios.post<void>('/klasatF',klasat),
    update: (klasat:Klasat) => axios.put<void>(`/klasatF/${klasat.id}`,klasat),
    delete: (id: string) => axios.delete<void>(`/klasatF/${id}`)
}

const Njesite ={
    list: () => requests.get<Njesia[]>('/njesite'),
    details: (id: string) => requests.get<Njesia>(`/njesite/${id}`),
    create: (njesia:Njesia) => axios.post<void>('/njesite',njesia),
    update: (njesia:Njesia) => axios.put<void>(`/njesite/${njesia.id}`,njesia),
    delete: (id: string) => axios.delete<void>(`/njesite/${id}`)
}


const Oret ={
    list: () => requests.get<Ora[]>('/oret'),
    details: (id: string) => requests.get<Ora>(`/oret/${id}`),
    create: (ora:Ora, LendaId:string,NjesiaId:string) => 
    axios.post<void>(`/oret/${LendaId},${NjesiaId}`,ora),
    update: (ora:Ora) => 
    axios.put<void>(`/njesite/${ora.id}`,ora),
    delete: (id: string) => axios.delete<void>(`/oret/${id}`)
}

const Mungesat ={
    list: () => requests.get<Mungesa[]>('/mungesat'),
    details: (id: string) => requests.get<Mungesa>(`/mungesat/${id}`),
    create: (mungesa:Mungesa,NxenesiId:string) => 
    axios.post<void>(`/mungesat/${NxenesiId}`,mungesa),
    update: (mungesa:Mungesa) => 
    axios.put<void>(`/mungesat/${mungesa.id}`,mungesa),
    delete: (id: string) => axios.delete<void>(`/mungesat/${id}`)
}

const Oraret ={
    list: () => requests.get<Orari[]>('/Oraret'),
    details: (id: string) => requests.get<Orari>(`/Oraret/${id}`),
    create: (oraret:Orari,LendaId:string,KlasaId:string) => 
    axios.post<void>(`/Oraret/${KlasaId},${LendaId}`,oraret),
    update: (oraret:Orari) => 
    axios.put<void>(`/Oraret/${oraret.id}`,oraret),
    delete: (id: string) => axios.delete<void>(`/Oraret/${id}`)
}



const agent = {
    Raportet,
    Activities,
    Account,
    StafiAccount,
    StafiAkademikk,
    Lendet,
    KlasatF,
    Planifikimet,
    NxenesiAccount,
    Nxenesitt,
    Njesite,
    Oret,
    Oraret,
    Mungesat
}


export default agent;