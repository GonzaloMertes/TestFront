export class Experiencia {
    //replicamos el entity del apache
    id?:number;
    nombreE : string;
    descripcionE:string;

    constructor (nombreE:string , descripcionE:string ){
        this.nombreE= nombreE;
        this.descripcionE = descripcionE;
    }
}
