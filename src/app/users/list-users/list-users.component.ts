import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass'],
})
export class ListUsersComponent implements OnInit {
  users$: Observable<UserData[]>;
  constructor(private usersService: UsersService) {}
  columnNames = [
    'id',
    'Name',
    'Phone',
    'Email',
    'Company',
    'Date_entry',
    'Org_num',
    'address_1',
    'city',
    'zip',
    'geo',
    'pan',
    'pin',
    'status',
    'guid',
    'date_exit',
    'date_first',
    'date_recent',
    'url',
  ];

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }
}
