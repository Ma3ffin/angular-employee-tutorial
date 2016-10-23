import { Injectable } from '@angular/core';
import {Employee} from "./../data/employee";
import { EMPLOYEE } from './../data/mock-employees';

@Injectable()
export class EmployeeService {

    getEmployees():Promise<Employee[]> {
        return Promise.resolve(EMPLOYEE);
    }

    getEmployee(id: number): Promise<Employee> {
        return this.getEmployees()
            .then(employees => employees.find(employee => employee.id === id));
    }
}