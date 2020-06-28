import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STableComponent } from './s-table/s-table.component';
import { SPaginatorComponent } from './s-paginator/s-paginator.component';
import { FormsModule } from '@angular/forms';
import { VTableComponent } from './v-table/v-table.component';

@NgModule({
  declarations: [STableComponent, SPaginatorComponent, VTableComponent],
  imports: [CommonModule, FormsModule],
  exports: [STableComponent, SPaginatorComponent, VTableComponent],
})
export class SharedModule { }
