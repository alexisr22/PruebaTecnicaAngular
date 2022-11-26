import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  headers:HttpHeaders;

  constructor(
    private http:HttpClient
  ) { 
    this.headers = new HttpHeaders({"Accept":"application/json","Authorization":"Bearer 27|vcdZQTjtqBD34dByltigKSWUPK2SItFOt0v3fGDp"})
  }

  // se configura el enviroment para que se use el de produccion
  inicial(){
   return this.http.get<any>(environment.endpoint,{headers:this.headers}).pipe(
      map(datos=>{
        return datos;
      })
    )
  }
}
