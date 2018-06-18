import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Angular2TokenService } from 'angular2-token';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
