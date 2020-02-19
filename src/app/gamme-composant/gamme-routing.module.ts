


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GammeComposantComponent } from './gamme-composant.component';



const routes: Routes = [{
    path: '',
 
    component: GammeComposantComponent,
    data: {
      title: 'gamme'
    },
  }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GammeRoutingModule {}