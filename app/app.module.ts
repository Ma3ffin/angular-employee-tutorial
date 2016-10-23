import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './app.component';
import { DashboardComponent }   from './component/dashboard.component';
import { EmployeeDetailComponent } from './component/employee-detail.component';
import { EmployeesComponent }     from './component/employees.component';
import { EmployeeService }         from './service/employee.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeDetailComponent,
    EmployeesComponent
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
