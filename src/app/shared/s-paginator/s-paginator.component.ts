import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

export interface PageChange {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-s-paginator',
  templateUrl: './s-paginator.component.html',
  styleUrls: ['./s-paginator.component.scss'],
})
export class SPaginatorComponent implements OnInit {
  /**
   * Number of total records.
   */
  @Input()
  totalRecords: number;

  /**
   *Data count to display per page.
   */
  @Input()
  rows: number = 10;

  /**
   *Array of integer values to display inside rows per page dropdown. Exp; [10,20,30]
   */
  @Input()
  rowsPerPageOptions: number[];

  @Output()
  onPageChange: EventEmitter<PageChange> = new EventEmitter<PageChange>();

  /**
   *Number of page links to display.
   *
   */
  @Input()
  pageLinkSize = 5;

  currentPage;

  private _pageLinkArray;

  public get PageLinkArray(): number[] {
    return this._pageLinkArray;
  }

  private _firstPage = 1;

  constructor() {
    this.setInitialValues();
    let isIE11 = !!window.MSInputMethodContext;
    console.log('isIE', isIE11);
  }

  ngOnInit(): void {}

  setInitialValues() {
    this.currentPage = 1;
    this._pageLinkArray = [1, 2, 3, 4, 5];
  }

  pageChanged(clickedPage: number) {
    console.log(clickedPage);

    this.updatePageLinkArray(
      this.PageLinkArray,
      clickedPage,
      this.pageLinkSize
    );

    this.currentPage = clickedPage;

    let pageChanged: PageChange = {
      first: 1,
      rows: this.rows,
      page: clickedPage,
      pageCount: 1,
    };

    this.onPageChange.next(pageChanged);
  }

  updatePageLinkArray(pageLinkArray: number[], currentPage, Size) {
    pageLinkArray.length = 0;

    for (let i = currentPage; i < currentPage + Size; i++) {
      pageLinkArray.push(i);
    }
  }

  updateRowSize(newRowValue: number) {
    this.rows = newRowValue;
    console.log(this.rows);

    let pageChanged: PageChange = {
      first: 1,
      rows: this.rows,
      page: this.currentPage,
      pageCount: 1,
    };

    this.onPageChange.next(pageChanged);
  }
}
