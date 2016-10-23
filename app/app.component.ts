import { Component } from '@angular/core';
import { Employee } from './employee';

const EMPLOYEE: Employee[] = [
    { id: 11, name: 'Max Meyer' },
    { id: 12, name: 'Tino Tewes' },
    { id: 13, name: 'Klaus Kleber' },
    { id: 14, name: 'Kurt Kurz' },
    { id: 15, name: 'Karla Klein' },
    { id: 16, name: 'Tanja Turnus' },
    { id: 17, name: 'Anna Auer' },
    { id: 18, name: 'Babsi Bauer' },
    { id: 19, name: 'Helga Huber' },
    { id: 20, name: 'Reihner Zufall' }
];



@Component({
    selector: 'my-app',
    template:`
  <h1>{{title}}</h1>
  <h2>Employee list</h2>
    <ul class="employees">
    <!-- *ngFor = For, (click) = Event Binding -->
      <li *ngFor="let employee of employees"
      [class.selected]="employee === selectedEmployee"
      (click)="onSelect(employee)">
      <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
    </ul>

    <my-employee-detail [employee]="selectedEmployee"></my-employee-detail>
  `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .employees {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .employees li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .employees li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .employees li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .employees .text {
    position: relative;
    top: -3px;
  }
  .employees .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent {
    title = 'My Employees';
    employees = EMPLOYEE;
    selectedEmployee: Employee;

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
    }
}

