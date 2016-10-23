import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Employee } from './../data/employee';
import { EmployeeService } from './../service/employee.service';

@Component({
    moduleId: module.id,
    selector: 'my-employee-detail',
    templateUrl: '../view/employee-detail.component.html',
    styleUrls: [ '../style/employee-detail.component.css' ]
})

export class EmployeeDetailComponent implements OnInit{
    @Input() employee: Employee;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.employeeService.getEmployee(id)
                .then(employee => this.employee = employee);
        });
    }

    goBack(): void {
        this.location.back();
    }
}