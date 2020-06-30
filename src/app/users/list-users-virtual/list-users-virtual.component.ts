import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { UserData } from '../user.model';
import { Column } from 'src/app/shared/s-table/Column';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users-virtual',
  templateUrl: './list-users-virtual.component.html',
  styleUrls: ['./list-users-virtual.component.scss']
})
export class ListUsersVirtualComponent implements OnInit {

  users$: Observable<UserData[]> = EMPTY;
  columnNames: Column[] = [];

  constructor(private usersService: UsersService) {
    this.columnNames = [
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
      { field: 'url', header: 'Url' }
    ];
  }


  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  submitRow(user: UserData): void {
    this.usersService.updateUser(user).subscribe();
  }

}
