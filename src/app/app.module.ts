import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { HomeComponent } from './pages/home-component/home.component';
import { DetailsComponent } from './pages/details-component/details.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    AddCompanyComponent,
    AddEmployeeComponent,
    CompaniesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
