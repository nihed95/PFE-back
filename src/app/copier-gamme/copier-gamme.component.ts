import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-copier-gamme',
  templateUrl: './copier-gamme.component.html',
  styleUrls: ['./copier-gamme.component.css']
})
export class CopierGammeComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  @Output() ModalC  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
 

}
