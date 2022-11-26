import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {


  url:string = 'http://localhost:8000';

  constructor(
    private http:HttpClient
  ) { }


  listBrands(){
    return this.http.get<any>(this.url+'/api/brand');
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'aplication/json'
    })
  };

  addBrand(data:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/brand',data,this.httpOptions);

  }

  find(id:number):Observable<any>{
    return this.http.get<any>(this.url+'/api/brand/'+id);
  }

  update(id:number, data:any){
    return this.http.put<any>(this.url+'/api/brand/'+ id, data,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete<any>(this.url+'/api/brand/'+ id,this.httpOptions);
  }


}
