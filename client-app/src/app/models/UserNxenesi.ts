export interface Nxenesit {
    id: string,
    emri: string,
    mbiemri:string,
    email:string,
    klasa: string,
    emriPrindit:string,
    numriTelefonit: string,
    userName: string,
    normalizedUserName: string,
    token:string,
    password:string
}

export interface NxenesiFormValues{
    Emri:string;
    Mbiemri:string;
    Username:string;
    Email: string;
    Password:string;
    token:string;
}