import { ModeAjoutGammeComponent } from './../mode-ajout-gamme/mode-ajout-gamme.component';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {BsModalService,BsModalRef} from  'ngx-bootstrap/modal';




@Component({
  selector: 'app-gamme-composant',
  templateUrl: './gamme-composant.component.html',
 /* styleUrls: ['./gamme-composant.component.css']*/
 providers: [ModeAjoutGammeComponent]
})
export class GammeComposantComponent implements OnInit {
  modalRef:BsModalRef;


  ModeAjoutGammeComponent: ModeAjoutGammeComponent;

  constructor(private modalService:BsModalService ) { }

  ngOnInit(): void {
    console.log('GammeComposantComponent');

  }
  clicSurBouton(){
    console.log("Vous venez de cliquer sur le bouton");
  
  }

/*Ajouter(temaplate:ModeAjoutGammeComponent){
  console.log('ça marche');

this.modalRef = this.modalService.show(temaplate);

}*/
Ajouter() {
  this.modalRef = this.modalService.show(ModeAjoutGammeComponent)
}

}