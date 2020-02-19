import { CopierGammeComponent } from './../copier-gamme/copier-gamme.component';
import { AjouterGammeComponent } from './../ajouter-gamme/ajouter-gamme.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-mode-ajout-gamme',
  templateUrl: './mode-ajout-gamme.component.html',
  styleUrls: ['./mode-ajout-gamme.component.css'],
  providers: [AjouterGammeComponent,CopierGammeComponent]
})
export class ModeAjoutGammeComponent implements OnInit {

  @ViewChild(ModalDirective) public MyModal: ModalDirective;
  @ViewChild(ModalDirective) public MyModalA: ModalDirective;
  @ViewChild(ModalDirective) public MyModalP: ModalDirective;

  constructor(public modalRef:BsModalRef,private modalService:BsModalService) { }

  


  AjouterGammeComponent: AjouterGammeComponent;


  ngOnInit(): void {
  }
  Ajouter() {
    this.modalRef = this.modalService.show(AjouterGammeComponent)
  }
  Copier() {
    this.modalRef = this.modalService.show(CopierGammeComponent)
  }
}
