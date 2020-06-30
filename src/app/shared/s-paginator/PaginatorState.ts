export interface PaginatorState {
  first: number;
  rows: number;
  /**
   * Data rows to display on page
   *
   */
  page: number;

  pageCount: number;
  totalRecords?: number;
}
