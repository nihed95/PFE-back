import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-ajouter-gamme',
  templateUrl: './ajouter-gamme.component.html',
  styleUrls: ['./ajouter-gamme.component.css']
})
export class AjouterGammeComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  constructor() { }
  ngOnInit(): void {
  }

}
