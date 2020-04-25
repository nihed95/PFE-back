import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectRowService {
  rowselected:number;
  constructor() { }
  
    getRowselected():number { 
    return this.rowselected;
  }
   setRowselected(rowselect){
    this.rowselected =rowselect;
  console.log(this.rowselected);}
}