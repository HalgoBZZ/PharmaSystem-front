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
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
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
import { FilterNomEmployePipe } from './pipes/filter-nom-employe.pipe';
import { FilterPrenomEmployePipe } from './pipes/filter-prenom-employe.pipe';
import { FilterDateNaissEmployePipe } from './pipes/filter-date-naiss-employe.pipe';
import { FilterEmailEmployePipe } from './pipes/filter-email-employe.pipe';
import { FilterAdresseEmployePipe } from './pipes/filter-adresse-employe.pipe';
import { FilterTelEmployePipe } from './pipes/filter-tel-employe.pipe';
import { FilterRoleEmployePipe } from './pipes/filter-role-employe.pipe';
import { FilterSexeEmployePipe } from './pipes/filter-sexe-employe.pipe';
import { FilterReferenceProdPipe } from './pipes/filter-reference-prod.pipe';
import { FilterFormeProdPipe } from './pipes/filter-forme-prod.pipe';
import { FilterDosageProdPipe } from './pipes/filter-dosage-prod.pipe';
import { FilterNomProdPipe } from './pipes/filter-nom-prod.pipe';
import { FilterCategorieProdPipe } from './pipes/filter-categorie-prod.pipe';
import { FilterQuantiteProdPipe } from './pipes/filter-quantite-prod.pipe';
import { FilterProductionProdPipe } from './pipes/filter-production-prod.pipe';
import { FilterExpirationProdPipe } from './pipes/filter-expiration-prod.pipe';
import { FilterPrixProdPipe } from './pipes/filter-prix-prod.pipe';
import { FilterFournisseurProdPipe } from './pipes/filter-fournisseur-prod.pipe';
import { FilterNomCategoriePipe } from './pipes/filter-nom-categorie.pipe';
import { FilterAjoutCategoriePipe } from './pipes/filter-ajout-categorie.pipe';
import { FilterModificationCategoriePipe } from './pipes/filter-modification-categorie.pipe';
import { FilterModificationFournisseurPipe } from './pipes/filter-modification-fournisseur.pipe';
import { FilterAjoutFournisseurPipe } from './pipes/filter-ajout-fournisseur.pipe';
import { FilterNomFournisseurPipe } from './pipes/filter-nom-fournisseur.pipe';
import { FilterEmailFournisseurPipe } from './pipes/filter-email-fournisseur.pipe';
import { FilterAdresseFournisseurPipe } from './pipes/filter-adresse-fournisseur.pipe';
import { FilterTelFournisseurPipe } from './pipes/filter-tel-fournisseur.pipe';
import { FilterDebutCongePipe } from './pipes/filter-debut-conge.pipe';
import { FilterFinCongePipe } from './pipes/filter-fin-conge.pipe';
import { FilterCauseCongePipe } from './pipes/filter-cause-conge.pipe';
import { FilterAjoutCongePipe } from './pipes/filter-ajout-conge.pipe';
import { FilterModificationCongePipe } from './pipes/filter-modification-conge.pipe';
import { FilterEtatCongePipe } from './pipes/filter-etat-conge.pipe';
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
    NewPassComponent,
    FilterNomEmployePipe,
    FilterPrenomEmployePipe,
    FilterDateNaissEmployePipe,
    FilterEmailEmployePipe,
    FilterAdresseEmployePipe,
    FilterTelEmployePipe,
    FilterRoleEmployePipe,
    FilterSexeEmployePipe,
    FilterReferenceProdPipe,
    FilterFormeProdPipe,
    FilterDosageProdPipe,
    FilterNomProdPipe,
    FilterCategorieProdPipe,
    FilterQuantiteProdPipe,
    FilterProductionProdPipe,
    FilterExpirationProdPipe,
    FilterPrixProdPipe,
    FilterFournisseurProdPipe,
    FilterNomCategoriePipe,
    FilterAjoutCategoriePipe,
    FilterModificationCategoriePipe,
    FilterModificationFournisseurPipe,
    FilterAjoutFournisseurPipe,
    FilterNomFournisseurPipe,
    FilterEmailFournisseurPipe,
    FilterAdresseFournisseurPipe,
    FilterTelFournisseurPipe,
    FilterDebutCongePipe,
    FilterFinCongePipe,
    FilterCauseCongePipe,
    FilterAjoutCongePipe,
    FilterModificationCongePipe,
    FilterEtatCongePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ChartModule,
    HttpClientModule,
    FormsModule,
    TypeaheadModule.forRoot(),
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
