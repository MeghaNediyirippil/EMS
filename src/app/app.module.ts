import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { ViewFullDetailsComponent } from './view-full-details/view-full-details.component';
import { FormsModule } from '@angular/forms';
import { IdCardComponent } from './id-card/id-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HeaderComponent,
    FooterComponent,
    AddEmployeeComponent,
    EditEmployeeDetailsComponent,
    ViewEmployeeDetailsComponent,
    PageNotFoundComponent,
    FilterPipe,
    ViewFullDetailsComponent,
    IdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
