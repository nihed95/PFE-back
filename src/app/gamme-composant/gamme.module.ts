
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GammeRoutingModule } from './gamme-routing.module';
import { GammeComposantComponent } from './gamme-composant.component';



// Theme Routing


@NgModule({
  imports: [
    CommonModule,
    GammeRoutingModule
  ],
  declarations: [
    GammeComposantComponent
  ]
})
export class GammeModule { }