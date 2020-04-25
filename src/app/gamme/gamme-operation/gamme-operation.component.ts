import { Operation } from './../operation';
import { GammeServiceService } from './../gamme-service.service';
import { Gamme } from './../gamme';
import { DynamicGrid } from './../dynamic-grid';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gamme-operation',
  templateUrl: './gamme-operation.component.html',
  styleUrls: ['./gamme-operation.component.css']
})
export class GammeOperationComponent implements OnInit {
  @ViewChild(ModalDirective) public MyModalM: ModalDirective;
  @ViewChild(ModalDirective) public MyModalO: ModalDirective;
  @ViewChild(ModalDirective) public myModal: ModalDirective;
  @ViewChild(ModalDirective) public MyModalS: ModalDirective;

 
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error("Method not implemented.");
  }



  constructor(private toastr: ToastrService, private gammeService:GammeServiceService,
              private formBuilder: FormBuilder) { 
                this.operation=new Operation();
              }

  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  gammes:  Array<Gamme> = [];
  gammess: Gamme [];
  operations: Operation[];
  gamme:Gamme;
  operation:Operation;
  gammeOperations:Number[] = [] ;
  gammeForm:FormGroup;
files:File[]=[];



  //obtenir l'id de la gamme ajoutée dans le composant gamme-composant
  idGamme = localStorage.getItem("idgamme");


  ngOnInit(): void {
this.operation = new Operation();


//pour intisaliser la formulaire pour réccuper les données de la gamme
    this.gammeForm = this.formBuilder.group({
      nom: [''],
      article: [''],
      indice:['']
      
  });


  
// pour remplir les champs du gamme récupérer de l'autre composant 
     this.gammeService.getGammeById(this.idGamme).subscribe( data => {
    this.gamme = data;
       console.log(this.gamme.id);
    this.prepareForm(this.gamme);
  });

//pour récupérer les gammes avec seulement les opérations spécifique
   this.gammeService.getOperationSpecifique().subscribe(data => {
      this.gammess = data;
      console.log(data);
    });

// pour récupérer les opérations standrad
    this.gammeService.getOperationStandard().subscribe(data => {
      this.operations = data;
      console.log(data);
    });

// pour récupérer les fils
    this.gammeService.getAllFiles().subscribe(data => {
      this.files = data;
      console.log(data);
    });



    this.newDynamic = {Nom: "", Désignation	: "",Description	:"",Indice	:"",Article	:""};
  //  this.dynamicArray.push(this.newDynamic);
  this.gammes.push(this.newDynamic);
}
   
 //get the selected row
selectedIndex:Operation;
selectRowSelected(selected:Operation)
 {
   this.selectedIndex=selected;
console.log(this.selectedIndex);
this.gammeOperations.push(this.selectedIndex.id);
console.log(this.gammeOperations);
return this.selectedIndex;
}
//pour afficher les valeurs du gamme récupérée 
prepareForm(gamme: Gamme) {
  this.gammeForm.controls.nom.setValue(gamme.nom);
  this.gammeForm.controls.article.setValue(gamme.article);
  this.gammeForm.controls.indice.setValue(gamme.indice);


}
  


addOperation(){

  this.gammeService.saveOperation(this.operation).subscribe(
    (result) => {
      if(result){
       console.log(result); 
       this.gammeOperations.push(result.id); 
       console.log(this.gammeOperations);
       this.modifierGammeOperation();
       
      }
    }
    
  );
  
}

modifierGammeOperation()
{

  this.gammeService.updateGamme(this.idGamme,this.gammeOperations,this.gamme).subscribe(
    (result) => {
      console.log(result);  
     }
  )

}



  /*addRow(index) {  
    
      this.newDynamic = {Nom: "", Désignation	: "",Description	:"",Indice	:"",Article	:""};
      //this.dynamicArray.push(this.newDynamic);
      this.gammes.push(this.newDynamic);

      this.toastr.success('New row added successfully', 'New Row');
      console.log(this.dynamicArray);
      return true;
  }
  
  deleteRow(index) {
      if(this.dynamicArray.length ==1) {
        this.toastr.error("Can't delete the row when there is only one row", 'Warning');
          return false;
      } else {
          this.dynamicArray.splice(index, 1);
          this.toastr.warning('Row deleted successfully', 'Delete row');
          return true;
      }
  }*/

}
