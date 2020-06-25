import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListUsersComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [ListUsersComponent],
})
export class UsersModule {}
