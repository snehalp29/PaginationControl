import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VScrollComponent } from './v-scroll/v-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [VScrollComponent],
  imports: [
    CommonModule, ScrollingModule
  ]
})
export class VscrollModule { }
