import { Component, Input } from '@angular/core';
import {Employee} from "./employee";

@Component({
    selector: 'my-employee-detail',
    template: `
  <div *ngIf="employee">
  <!-- *ngIf = if -->
    <h2>{{employee.name}} details!</h2>
    <div><label>id: </label>{{employee.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="employee.name" placeholder="name"/>
    </div>
  </div>
`
})

export class EmployeeDetailComponent {
    @Input()
    employee: Employee;
}