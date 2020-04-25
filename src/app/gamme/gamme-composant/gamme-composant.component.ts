import { Router } from '@angular/router';
import { SelectRowService } from './../select-row.service';
import { GammeServiceService } from './../gamme-service.service';
import { Gamme } from './../gamme';
import { Component, OnInit , ViewChild } from '@angular/core';
import {BsModalService,BsModalRef, ModalDirective} from  'ngx-bootstrap/modal';




@Component({
  selector: 'app-gamme-composant',
  templateUrl: './gamme-composant.component.html',
 /* styleUrls: ['./gamme-composant.component.css']*/
 providers: []
})

export class GammeComposantComponent implements OnInit {
  @ViewChild(ModalDirective) public myModal: ModalDirective;

  modalRef:BsModalRef;
  page :number = 1;
  pageSize =10;
  gammes: Gamme [] =[];
  gamme: Gamme ;
  gammeAdd: Gamme ;
  idGamme:Number;
  idGammeCopier:Number;


  gammesOp :Gamme;
  
  constructor(private router: Router,private modalService:BsModalService, private gammeService:GammeServiceService,public selectrows:SelectRowService ) { }

  ngOnInit() {

    this.gammeAdd= new Gamme();

    this.gammeService.getAllGamme().subscribe(data => {
      this.gammes = data;
      console.log(data);
     
    });
  
   
  }


  selectedIndex=-1;

selectRowSelected(gamme:any)
 {
   this.selectedIndex=gamme;
console.log(this.selectedIndex);

return this.selectedIndex;
}
  clicSurBouton(){
    console.log("Vous venez de cliquer sur le bouton");
  
  }

  onSubmit() {
    this.gammeService.saveGamme(this.gammeAdd).subscribe(
      (result) => {
     console.log(result);

     
    
        if(result){
          this.idGamme = result.id;
        console.log(this.idGamme);
        localStorage.setItem('idgamme', String(this.idGamme) );
        this.router.navigate(['gamme/gammeOperation']);

        
        

        }
         } );
  
  }
  copierGamme(gammeiD:any)
  {
    this.gammeService.getGammeById(gammeiD).subscribe( data => {
      this.gamme = data;
      console.log(data);
         console.log(this.gamme.id);
         this.idGammeCopier =data.id;
         localStorage.setItem('idgammeCopier', String(this.idGammeCopier));
         this.router.navigate(['gamme/CopierGamme']);

    });
  
  }

  

}