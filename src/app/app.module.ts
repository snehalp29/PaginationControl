import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users';
import { SharedModule } from './shared/shared.module';
import { VscrollModule } from './vscroll/vscroll.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UsersModule, SharedModule, VscrollModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
