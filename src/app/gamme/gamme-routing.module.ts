import { CopierGammeComponent } from './copier-gamme/copier-gamme.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GammeComposantComponent } from './gamme-composant/gamme-composant.component';
import { GammeOperationComponent } from './gamme-operation/gamme-operation.component';




const routes: Routes = [{
   /* path: '',
 
    component: GammeComposantComponent,GammeOperationComponent,
    data: {
      title: 'gamme'
    },
  }

  {*/
    path: '',
    data: {
      title: 'gamme'
    },
    children: [
      {
        path: '',
        redirectTo: 'gammes'
      },
      {
        path: 'gammes',
        component: GammeComposantComponent,

        data: {
          title: 'Gammes'
        }
      },
    
      
        {
          path: 'gammeOperation',
          component: GammeOperationComponent,


          data: {
            title: 'Operation'
          }
        },
        {
          path: 'CopierGamme',
          component: CopierGammeComponent,


          data: {
            title: 'copier'
          }
        }

        
      ]
    }
  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GammeRoutingModule {}