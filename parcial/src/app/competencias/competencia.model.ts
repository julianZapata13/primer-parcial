import { Comportamientos } from "./comportamientos.model";

export class Competencias{

    constructor(public idCompetencia:number, public nombre:string,public descripciones:string,public comportamientos:Comportamientos[]){

    }
}