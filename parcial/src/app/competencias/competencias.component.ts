
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

  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
