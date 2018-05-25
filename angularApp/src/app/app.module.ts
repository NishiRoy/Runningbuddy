import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,rountingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AuthGuard} from './auth.guard';
import { RootComponent } from './root-component/root-component.component';



@NgModule({
  declarations: [
    AppComponent,
    rountingcomponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
