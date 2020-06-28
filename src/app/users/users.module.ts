import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ListUsersVirtualComponent } from './list-users-virtual/list-users-virtual.component';

@NgModule({
  declarations: [ListUsersComponent, ListUsersVirtualComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [ListUsersComponent],
})
export class UsersModule {}
