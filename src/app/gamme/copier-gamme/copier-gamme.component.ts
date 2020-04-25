import { Operation } from './../operation';
import { GammeServiceService } from './../gamme-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Gamme } from '../gamme';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-copier-gamme',
  templateUrl: './copier-gamme.component.html',
  styleUrls: ['./copier-gamme.component.css']
})
export class CopierGammeComponent implements OnInit {
  @ViewChild(ModalDirective) public MyModalM: ModalDirective;
  @ViewChild(ModalDirective) public MyModalO: ModalDirective;
  @ViewChild(ModalDirective) public myModal: ModalDirective;
  @ViewChild(ModalDirective) public MyModalS: ModalDirective;
  gammeForm:FormGroup;
  gamme:Gamme;
  gammeAdd:Gamme;

  Operations :any[]=[];
idGamme:any;

  gammes:  Array<Gamme> = [];
  gammess: Gamme [];
  operations: Operation[];
 
  operation:Operation;
  gammeOperations:Number[] = [] ;
  idGammeCopier= localStorage.getItem("idgammeCopier");
  constructor( private gammeService:GammeServiceService,
    private formBuilder: FormBuilder) {
      this.operation=new Operation();
      this.gammeAdd=new Gamme();
     }

  ngOnInit(): void {
    this.gammeForm = this.formBuilder.group({
      nom: [''],
      desgination:[''],
      description:[''],
      article: [''],
      indice:[''],
      status:['']
  });

  this.gammeService.getGammeById(this.idGammeCopier).subscribe( data => {
    this.gamme = data;
       console.log(this.gamme.id);
       this.Operations=data.operations;
      
       console.log(this.Operations);
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



   
 

  }

  selectedIndex:Operation;
  selectRowSelected(selected:Operation)
   {
     this.selectedIndex=selected;
  console.log(this.selectedIndex);
  this.Operations.push(this.selectedIndex);
  console.log(this.Operations);
  return this.selectedIndex;
  }
  prepareForm(gamme: Gamme) {
    this.gammeForm.controls.nom.setValue(gamme.nom);
    this.gammeForm.controls.desgination.setValue(gamme.desgination);
    this.gammeForm.controls.description.setValue(gamme.description);
    this.gammeForm.controls.indice.setValue('1');
    this.gammeForm.controls.status.setValue(gamme.status);
  }
effacerUneOperation(idOperation)
{  for(let i = 0; i < this.Operations.length; ++i){
  if (this.Operations[i].id === idOperation) {
      this.Operations.splice(i,1);
  }
}
for(let i = 0; i < this.Operations.length; ++i){
  this.gammeOperations.push(this.Operations[i].id);
}
  console.log(this.Operations);
}
addGamme(){
  this.gammeService.saveGamme(this.gammeAdd).subscribe(
    (result) => {
      if(result){
       console.log(result); 
this.idGamme=result.id;
       this.addOperation();
       
      }
    }
    

  )
}
addOperation(){

  this.gammeService.saveOperation(this.operation).subscribe(
    (result) => {
      if(result){
       console.log(result); 
       this.Operations.push(result); 
       
      this.gammeOperations.push(result.id);
       console.log(this.Operations);
       this.modifierGammeOperation();
       
      }
    }
    
  );
  
}

modifierGammeOperation()
{

  this.gammeService.updateGamme(this.idGamme,this.gammeOperations,this.gammeAdd).subscribe(
    (result) => {
      console.log(result);  
     }
  )

}



}
