import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STableComponent } from './s-table/s-table.component';
import { SPaginatorComponent } from './s-paginator/s-paginator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [STableComponent, SPaginatorComponent],
  imports: [CommonModule, FormsModule],
  exports: [STableComponent],
})
export class SharedModule {}
