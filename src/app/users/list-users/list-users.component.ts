import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { UserData } from '../user.model';
import { UsersService } from '../users.service';
import { Column } from '../../shared/s-table/Column';
import { PaginatorState } from 'src/app/shared/s-paginator/PaginatorState';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass'],
})
export class ListUsersComponent implements OnInit {
  users$: Observable<UserData[]> = EMPTY;
  constructor(private usersService: UsersService) { }
  columnNames: Column[] = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'phone', header: 'Phone' },
    { field: 'email', header: 'Email' },
    { field: 'company', header: 'Company' },
    { field: 'date_entry', header: 'Date' },
    { field: 'org_num', header: 'Org' },
    { field: 'address_1', header: 'Address' },
    { field: 'city', header: 'City' },
    { field: 'zip', header: 'Zip' },
    { field: 'geo', header: 'Geo' },
    { field: 'pan', header: 'pan' },
    { field: 'pin', header: 'Pin' },
    { field: 'status', header: 'Status' },
    { field: 'fee', header: 'Fee' },
    { field: 'guid', header: 'guid' },
    { field: 'date_exit', header: 'Date Exit' },
    { field: 'date_first', header: 'Date First' },
    { field: 'date_recent', header: 'Date Recent' },
    { field: 'url', header: 'Url' },
  ];

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  // refreshData(pageData: PaginatorState): void {
  //   this.users$ = this.usersService.getUsersPage(pageData.page, pageData.rows);
  // }
}
