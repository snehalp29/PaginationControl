import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ListUsersVirtualComponent } from './list-users-virtual/list-users-virtual.component';
import { Route, RouterModule } from '@angular/router';

const UserRoutes: Route[] = [
  { path: '', component: ListUsersComponent },
  { path: 'users-v', component: ListUsersVirtualComponent }
]
@NgModule({
  declarations: [ListUsersComponent, ListUsersVirtualComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, RouterModule.forChild(UserRoutes)],
})
export class UsersModule { }
