import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from './../data/employee';
import { EmployeeService } from './../service/employee.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: '../view/dashboard.component.html',
    styleUrls: [ '../style/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

    employees: Employee[];

    constructor(
        private router: Router,
        private employeeService: EmployeeService
    ) { }

    getEmployees(): void {
        this.employeeService.getEmployees().then(employees => this.employees = employees.slice(1, 5));
    }

    ngOnInit(): void {
        this.getEmployees();
    }

    gotoDetail(employee: Employee): void {
        let link = ['/detail', employee.id];
        this.router.navigate(link);
    }
}