import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STableComponent } from './s-table/s-table.component';

@NgModule({
  declarations: [STableComponent],
  imports: [CommonModule],
  exports: [STableComponent],
})
export class SharedModule {}
