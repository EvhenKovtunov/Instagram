import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { HttpClient } from '@angular/common/http';
//import { ApiServiceService } from "../api-service.service";
import 'rxjs/Rx';
import { Posts} from "../model/posts"; 
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
//  providers:[ApiServiceService]
})
export class MainPageComponent implements OnInit {


  //posts:Posts[];
  baseUrl = 'http://5b27755162e42b0014915662.mockapi.io/api/v1/posts';
  public apiData: any;

  constructor(private _tokenService: Angular2TokenService /*private _apiService:ApiServiceService*/) {
    this._tokenService.init();
    this._tokenService.get(this.baseUrl).map(res => res.json()).subscribe(
       res => this.apiData = res,
       error => console.log(error)
     );
 
     console.log("API:",this.apiData);
  }
  ngOnInit(){
  
    
   // this.getData();
    //console.log(this.posts);
  }

   /*getData(){
    this._apiService.getPosts().subscribe(
      data=>this.posts=data,
      errorCode =>  console.log(errorCode) 
    );
  }*/

}
