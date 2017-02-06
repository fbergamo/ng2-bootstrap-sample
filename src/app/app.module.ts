import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {AlertModule, TypeaheadModule} from "ng2-bootstrap";
import { FirstPageComponent } from './first-page/first-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch:'full' },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'home-page', component: HomePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),TypeaheadModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


