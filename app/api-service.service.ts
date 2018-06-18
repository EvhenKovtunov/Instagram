import { Injectable } from '@angular/core';
import { Posts} from "./model/posts"; 
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiServiceService {

   public api="http://5b27755162e42b0014915662.mockapi.io/api/v1/posts";
  constructor(private _http:Http) { }

  getPosts(): Observable<Posts[]>{
    return this._http.get(this.api).map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
