import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http:HttpClient) { }

  getdata():Observable<any>{
    return this.http.get('http://localhost:3000/posts');
  }
  saveemp(formdata):Observable<any>{
    return this.http.post('http://localhost:3000/posts',formdata)
  }
  delemp(formdata):Observable<any>{
    return this.http.delete('http://localhost:3000/posts/' +formdata);
  }
  update(formdata):Observable<any>{
    return this.http.put('http://localhost:3000/posts/' + formdata.id,formdata);
  }
}
