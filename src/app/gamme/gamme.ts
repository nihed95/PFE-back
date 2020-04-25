import { Operation } from './operation';


export class Gamme {
    id :Number ;
    nom : string ;
    desgination:String;
    description :String;
    indice :String ;
    article: String;
    status: String;
    operations: Operation[];
    constructor(){
    }
  getId():Number
 {return this.id ;}
    
    setId(id:Number):void
    {this.id=this.id;}
}
