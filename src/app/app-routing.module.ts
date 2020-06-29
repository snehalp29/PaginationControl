import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './users';
import { ListUsersVirtualComponent } from './users/list-users-virtual/list-users-virtual.component';
import { VScrollComponent } from './vscroll/v-scroll/v-scroll.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },

  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '**', redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
