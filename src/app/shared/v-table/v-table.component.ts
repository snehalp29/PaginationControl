import { Component, OnInit, Input } from '@angular/core';
import { STableComponent } from '../s-table/s-table.component';

@Component({
  selector: 'app-v-table',
  templateUrl: './v-table.component.html',
  styleUrls: ['./v-table.component.scss']
})
export class VTableComponent extends STableComponent implements OnInit {


  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
