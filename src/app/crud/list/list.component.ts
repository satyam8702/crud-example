import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './list.component.html',
})
export class ListComponent {
  adminList = [
    {
      id: 1,
      name: 'Satyam Sahu',
      mail: 'satyamsahu8702@gmail.com',
      contact: 7489125831,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Roshni Sahu',
      mail: 'roshnipatel1601@gmail.com',
      contact: 7089273447,
      status: 'Active',
    },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'mail' },
    { field: 'contact' },
    { field: 'status' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
