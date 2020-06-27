import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Column } from './Column';
import { PaginatorState } from '../s-paginator/PaginatorState';

@Component({
  selector: 'app-s-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss'],
})
export class STableComponent implements OnInit, OnChanges {
  /**
   * An Input data
   */
  @Input() data: any[] = [];

  /**
   * An array of objects to represent dynamic columns.
   */
  @Input() columns: Column[] = [];
  @Input() ShowFooter = false;
  @Input() EnablePagination = false;

  @ContentChild('body', { static: false })
  selectedBodyTemplateRef: TemplateRef<any> | undefined;

  @ContentChild('footer', { static: false })
  selectedFooterTemplateRef: TemplateRef<any> | undefined;

  @Output()
  UpdateData: EventEmitter<PaginatorState> = new EventEmitter<PaginatorState>();

  @Input() rows = 0;
  @Input() first = 0;
  @Input() totalRecords = 0;
  @Input() pageLinks = 5;

  constructor() { }

  ngOnInit(): void {

  }



  pageChanged(pageDetail: PaginatorState) {
    this.first = pageDetail.first;
    this.rows = pageDetail.rows;

    // this.onPage.emit({
    //   first: this.first,
    //   rows: this.rows
    // });

    // this.firstChange.emit(this.first);
    // this.rowsChange.emit(this.rows);
    // this.tableService.onValueChange(this.data);

  }

  ngOnChanges(simpleChange: SimpleChanges) {
    if (simpleChange.data) {
      this.data = simpleChange.data.currentValue;
      this.totalRecords = (this.data ? this.data.length : 0);
    }

    if (simpleChange.columns) {
      this.columns = simpleChange.columns.currentValue;
    }

  }
}
