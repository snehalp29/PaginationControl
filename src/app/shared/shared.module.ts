import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STableComponent } from './s-table/s-table.component';
import { SPaginatorComponent } from './s-paginator/s-paginator.component';

@NgModule({
  declarations: [STableComponent, SPaginatorComponent],
  imports: [CommonModule],
  exports: [STableComponent],
})
export class SharedModule {}
