import { NgModule } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ClienteComponent } from './cliente/cliente.component';
//import { FacturaComponent } from './factura/factura.component';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SistemaComponent } from './sistema/sistema.component';
import { CompetenciasComponent } from './competencias/competencias.component';

@NgModule({
  declarations: [
    AppComponent,
    SistemaComponent,
    CompetenciasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
