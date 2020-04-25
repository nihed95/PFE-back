import { CopierGammeComponent } from './copier-gamme/copier-gamme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GammeOperationComponent } from './gamme-operation/gamme-operation.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GammeRoutingModule } from './gamme-routing.module';
import { GammeComposantComponent } from './gamme-composant/gamme-composant.component';
import { ModalModule } from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

// Theme Routing


@NgModule({
  imports: [
    CommonModule,
   
    GammeRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
NgbModule,
ReactiveFormsModule,
Ng2SearchPipeModule,
NgxPaginationModule

    ],
  declarations: [
    GammeOperationComponent,

    GammeComposantComponent,
    CopierGammeComponent
    
  ]
})
export class GammeModule { }