import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = 'http://localhost:8000';

  constructor(
    private http:HttpClient
  ) { }


  list(){
    return this.http.get<any>(this.url+'/api/products');
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'aplication/json'
    })
  };

  add(data:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/products',data,this.httpOptions);

  }

  find(id:number):Observable<any>{
    return this.http.get<any>(this.url+'/api/products/'+id);
  }

  update(id:number, data:any){
    return this.http.put<any>(this.url+'/api/products/'+ id, data,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete<any>(this.url+'/api/products/'+ id,this.httpOptions);
  }


}
