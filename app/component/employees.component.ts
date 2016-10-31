import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from './../data/employee';
import { EmployeeService } from './../service/employee.service';

@Component({
    moduleId: module.id,
    selector: 'my-employees',
    templateUrl: '../view/employees.component.html',
    styleUrls: [ '../style/employees.component.css' ]
})

export class EmployeesComponent implements OnInit{

    //Properties
    employees: Employee[];
    selectedEmployee: Employee;

    constructor(
        private router: Router,
        private employeeService: EmployeeService
    ) { }

    //.then => Wenn Employees erhalten dann..
    // => Lambda expression
    getEmployees(): void {
        this.employeeService.getEmployees().then(employees => this.employees = employees);
    }
    ngOnInit(): void {
        this.getEmployees();
    }

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
    }

    gotoDetail(): void {
        //let = lokale variablendeklaration
        let link = ['/detail', this.selectedEmployee.id];
        this.router.navigate(link);
    }
}

