import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AsideComponent } from './components/aside/aside.component';
import { routing } from './app.routing';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { StockComponent } from './components/stock/stock.component';
import { CongesComponent } from './components/conges/conges.component';
import { ComptabiliteComponent } from './components/comptabilite/comptabilite.component';
import { RapportsComponent } from './components/rapports/rapports.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { CaisseComponent } from './components/caisse/caisse.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MonProfilComponent } from './components/mon-profil/mon-profil.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalenderComponent } from './components/calender/calender.component';
import { CategoriesService } from './services/categories.service';
import { ClientsService } from './services/clients.service';
import { CongesService } from './services/conges.service';
import { EmployesService } from './services/employes.service';
import { FacturesService } from './services/factures.service';
import { FournisseursService } from './services/fournisseurs.service';
import { ProduitsService } from './services/produits.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { CodeVerificationComponent } from './components/code-verification/code-verification.component';
import { NewPassComponent } from './components/new-pass/new-pass.component';
// import { FlatpickrModule } from 'angularx-flatpickr';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    BodyComponent,
    AsideComponent,
    FournisseursComponent,
    EmployeesComponent,
    StockComponent,
    CongesComponent,
    ComptabiliteComponent,
    RapportsComponent,
    PrincipalComponent,
    HighchartsChartComponent,
    ConfigurationsComponent,
    CaisseComponent,
    CategoriesComponent,
    MonProfilComponent,
    CalenderComponent,
    ForgetPassComponent,
    CodeVerificationComponent,
    NewPassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ChartModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    // FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [CategoriesService, ClientsService, CongesService, EmployesService,
  FacturesService, FournisseursService, ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
