import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { PaginatorState } from './PaginatorState';

@Component({
  selector: 'app-s-paginator',
  templateUrl: './s-paginator.component.html',
  styleUrls: ['./s-paginator.component.scss'],
})
export class SPaginatorComponent implements OnInit, OnChanges {
  /**
   * Number of total records.
   */
  @Input() totalRecords = 0;

  /**
   * Data count to display per page.
   */
  @Input() rows = 10;

  @Output() PageChanged: EventEmitter<PaginatorState> = new EventEmitter<PaginatorState>();

  /**
   * Number of page links to display.
   */
  @Input() pageLinkSize = 5;
  currentPage = 0;
  pageCount = 0;

  @Input() first = 0;

  paginatorState: PaginatorState = { first: 0, rows: 0, page: 0, pageCount: 0, totalRecords: 0 };

  pageLinks: number[] = [];

  rowsPerPageItems: number[] = [];


  constructor() { }

  ngOnInit(): void {
    this.updatePaginatorState();
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    if (simpleChange.totalRecords) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }

    if (simpleChange.rows) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }

  }

  updatePageLinks() {
    this.pageLinks = [];
    const boundaries = this.calculatePageLinkBoundaries();
    const start: number = boundaries[0];
    const end = boundaries[1];

    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
  }

  calculatePageLinkBoundaries(): number[] {
    const numberOfPages = this.getPageCount();
    const visiblePages = Math.min(this.pageLinkSize, numberOfPages);

    // calculate range, keep current in middle if necessary
    let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2)));
    const end = Math.min(numberOfPages - 1, start + visiblePages - 1);

    // check when approaching to last page
    const delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);

    return [start, end];
  }

  changePage(p: number) {
    const pc = this.getPageCount();

    if (p >= 0 && p < pc) {
      this.first = this.rows * p;
      const state: PaginatorState = {
        page: p,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();

      this.PageChanged.emit(state);
      this.updatePaginatorState();
    }
  }

  onPageLinkClick(event: Event, page: number) {
    this.changePage(page);
    event.preventDefault();
  }

  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: this.rows,
      first: this.first,
      totalRecords: this.totalRecords
    };
  }

  isFirstPage() {
    return this.getPage() === 0;
  }

  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }

  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows) || 1;
  }

  getPage(): number {
    return Math.floor(this.first / this.rows);
  }

  changePageToFirst(event: Event) {
    if (!this.isFirstPage()) {
      this.changePage(0);
    }
    event.preventDefault();
  }

  changePageToPrev(event: Event) {
    this.changePage(this.getPage() - 1);
    event.preventDefault();
  }

  changePageToNext(event: Event) {
    this.changePage(this.getPage() + 1);
    event.preventDefault();
  }

  changePageToLast(event: Event) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount() - 1);
    }
    event.preventDefault();
  }

  updateRowSize(newRowValue: number) {
    this.changePage(this.getPage());
  }

}
