import { Operation } from './operation';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gamme } from './gamme';

@Injectable({
  providedIn: 'root'
})
export class GammeServiceService {
  private gammeUrl : string ;
  private operationUrl :string;
  private fileUrl:string;

  constructor(private http: HttpClient) {
    this.gammeUrl = 'http://localhost:8080/service-GammeOperatoire/gammes';
    this.operationUrl='http://localhost:8080/service-GammeOperatoire/operations';
    this.fileUrl='http://localhost:8080/service-GammeOperatoire/documents';
   }
/* service of get all gamme */
   public getAllGamme(): Observable<Gamme[]> {
    return this.http.get<Gamme[]>(this.gammeUrl+'/'+'gammes');
  }


  /* Service of get all files */
  
  public getAllFiles(): Observable<File[]> {
    return this.http.get<File[]>(this.fileUrl + '/' +'Documents')

  }


  /* service of get gamme by id */

  public getGammeById(id): Observable<Gamme> {
    return this.http.get<Gamme>(this.gammeUrl+'/gamme/'+id);
  }
/* service of get all gamme when the operation type is specifique */

  public getOperationSpecifique(): Observable<Gamme[]> {
    return this.http.get<Gamme[]>(this.gammeUrl+'/'+'gammes'+'/'+'specifique');
  }
/* service of get all standrad operation */

  public getOperationStandard(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.operationUrl+'/operations/standard');
  }

/* service of post a new gamme */

  public saveGamme(gamme: Gamme) {
    return this.http.post<Gamme>(this.gammeUrl+'/'+'ajoutGamme', gamme);
  }

  /* service of post a new operation */
  public saveOperation(operation: Operation) {
    return this.http.post<Operation>(this.operationUrl+'/'+'ajoutOperation', operation);
  }
  /* service of create the link between operation and gamme */
  public updateGamme( id,operation:Array<any>,gamme): Observable<any> {
    return this.http.put<any>(this.gammeUrl + '/'+'updateGamme'+'/' + id + '/'+ operation , gamme);
  }
}
