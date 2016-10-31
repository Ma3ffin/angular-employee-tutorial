import { Injectable } from '@angular/core';
import {Employee} from "./../data/employee";
import { EMPLOYEE } from './../data/mock-employees';

@Injectable()
export class EmployeeService {

    //Promise => Asycroner return eines Methodenaufrufs
    getEmployees():Promise<Employee[]> {
        return Promise.resolve(EMPLOYEE);
    }

    //Promise => Asycroner return eines Methodenaufrufs
    getEmployee(id: number): Promise<Employee> {
        return this.getEmployees()
            .then(employees => employees.find(employee => employee.id === id));
    }
}