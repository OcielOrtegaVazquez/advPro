import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcumbsComponent } from './shared/breadcumbs/breadcumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { AppRoutingmodule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgessComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
