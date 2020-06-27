import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-paginator',
  templateUrl: './s-paginator.component.html',
  styleUrls: ['./s-paginator.component.sass'],
})
export class SPaginatorComponent implements OnInit {
  /**
   * Number of total records.
   */
  totalRecords: number;

  /**
   *Data count to display per page.
   */
  rows: number;

  /**
   *Array of integer values to display inside rows per page dropdown. Exp; [10,20,30]
   */
  rowsPerPageOptions: number[];

  // pageLinkSize

  constructor() {}

  ngOnInit(): void {}
}
