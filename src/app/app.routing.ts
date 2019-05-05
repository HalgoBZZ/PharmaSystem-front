import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { StockComponent } from './components/stock/stock.component';
import { CongesComponent } from './components/conges/conges.component';
import { ComptabiliteComponent } from './components/comptabilite/comptabilite.component';
import { RapportsComponent } from './components/rapports/rapports.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { CaisseComponent } from './components/caisse/caisse.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MonProfilComponent } from './components/mon-profil/mon-profil.component';
import { CalenderComponent } from './components/calender/calender.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { CodeVerificationComponent } from './components/code-verification/code-verification.component';




const appRoutes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent },
{ path: 'forgetpass', component: ForgetPassComponent },
{ path: 'newpass', component: NewPassComponent },
{ path: 'verifcode', component: CodeVerificationComponent },
{path: 'principal', component: PrincipalComponent, children: [
    { path: 'fournisseurs', component: FournisseursComponent, outlet: 'child1' },
    { path: 'employees', component: EmployeesComponent, outlet: 'child1' },
    { path: 'stock', component: StockComponent, outlet: 'child1' },
    { path: 'conges', component: CongesComponent, outlet: 'child1' },
    { path: 'comptabilite', component: ComptabiliteComponent, outlet: 'child1' },
    { path: 'rapports', component: RapportsComponent, outlet: 'child1' },
    { path: 'caisse', component: CaisseComponent, outlet: 'child1'},
    { path: 'conf', component: ConfigurationsComponent, outlet: 'child1'},
    { path: 'categories', component: CategoriesComponent, outlet: 'child1'},
    { path: 'profil', component: MonProfilComponent, outlet: 'child1'},
    { path: 'calender', component: CalenderComponent, outlet: 'child1'}
]}
] ;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
