
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Comportamientos } from './comportamientos.model';
import { Competencias } from './competencia.model';
import { CompileReflector } from '@angular/compiler';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  comportamientos: Comportamientos[] = [];
  competencias: Competencias[] = [];
  idComportamiento=1;
  nombre = "";
  descripciones="";
  idCompetencia=1;
  idCompe=1;
  sinCompetencia:boolean=false;
  desabilitadoBtnCompe:boolean=true;
  sinCompetencias:boolean=true;
  desabilitadoBtnCompor:boolean=true;
  descripcion="";
  porcentaje=0;
  valorPorcentaje=0;
  visualizarCompetencias:boolean=true;
  visualizarComportamientos:boolean=false;

  

  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
 ////-----------funviones que validan los formularios-------------------
  validarFormCompe(){
    try{
      
      if(this.nombre!="" && this.descripciones!=""){
        this.desabilitadoBtnCompe=false
      }
      else{
        this.desabilitadoBtnCompe=true
      }

     
    }
    catch(e){
      console.log("An error occurred on validarFormCompe=>",e)
    }
  }
  
  validarFormComporta(){
    
    try{
      
      if(this.descripcion!=""){
     
        this.desabilitadoBtnCompor=false
        
      }
      else{
        this.desabilitadoBtnCompor=true
       
      }
    
    }
    catch(e){
      console.log("An error occurred on validarFormComporta=>",e)
    }
  }

  ///----------funcion agregar una competencia al sistema---------------------
  crearCompetencias(){
    try{
      let competencias = new Competencias(this.idCompetencia,this.nombre,this.descripciones,[])
      this.competencias.push(competencias);
      this.idCompetencia=this.idCompetencia+1;
      this.sinCompetencias=false;
      this.nombre="";
      this.descripciones="";
      this.desabilitadoBtnCompe=true
      
    }
    catch(e){
      console.log("An error occurred on crearCompetencias=>",e)
    }
    
  }

  ///--------funciones que abren los popup---------------------------
  openAgregarComportamientos(idCompetencia: number,content: any){
    try{
      
      this.idCompe=idCompetencia;
      console.log(idCompetencia)
      this.desabilitadoBtnCompor=true;
      this.modalService.open(content)
      
     
    }
    catch(e){
      console.log("An error occurred on openAgregarComportamientos=>",e)
    }
  }

  verComportamientos(idCompetencia:number){
    try{

      this.idCompe=idCompetencia;
      var buscarCompetencia=this.competencias.find(compe=>compe.idCompetencia==this.idCompe)
      if(buscarCompetencia==undefined){
        alert("el id de la competencia no existe")
      }
      else{
        this.comportamientos=buscarCompetencia.comportamientos;
        this.visualizarCompetencias=false;
        this.visualizarComportamientos=true;
        
      }
     console.log(this.comportamientos)
    }
    catch(e){
      console.log("An error occurred on verComportamientos=>",e)
    }
  }

///----------funcion agregar comportamientos a la competencia------------------------
  agregarComportamiento(idCompetencia:number){
    try{
      let comportamiento = new Comportamientos(this.idComportamiento,this.descripcion,this.porcentaje)
      var buscarCompetencia=this.competencias.find(compe=>compe.idCompetencia==idCompetencia)
      if( buscarCompetencia==undefined){
        alert("el id de competencia no existe")
      }
      else{
        buscarCompetencia.comportamientos.push(comportamiento)
        this.idComportamiento=this.idComportamiento+1;
        this.descripcion="";
        this.porcentaje=0;
        this.desabilitadoBtnCompor=true;
        
      }
     
    }
    catch(e){
      console.log("An error occurred on agregarComportamiento=>",e)
    }
  }

  ///----------funcion eliminar competencia------------------------
  eliminararCompetencia(idCompetencia:number){
  try{
   
    let index = this.competencias.findIndex(compe => compe.idCompetencia === idCompetencia);
    var removed = this.competencias.splice(index, 1);
    if(this.competencias.length==0){
      this.sinCompetencias=true;
    }
   
  } 
    catch(e){
      console.log("An error occurred on eliminararCompetencia=>",e)
    }
  }

  //----------funcion eliminar comportamiento----------------------------
  eliminararComportamiento(idComportamiento:number){
    try{
     
      let index = this.comportamientos.findIndex(compor => compor.idComportamiento=== idComportamiento);
      var removed = this.comportamientos.splice(index, 1);
     
    } 
      catch(e){
        console.log("An error occurred on eliminararComportamiento=>",e)
      }
    }

  regresarCompetencias(){
      try{
        
        this.visualizarCompetencias=true;
        this.visualizarComportamientos=false;
  
       
      }
      catch(e){
        console.log("An error occurred on validarFormCompe=>",e)
      }
    }
}
