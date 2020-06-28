import {
  Component,
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
export class STableComponent implements OnChanges {
  /**
   * An Input data
   */
  @Input() data: any[] = [];

  private displayData: any[] = [];

  public get DisplayData(): any[] {
    return this.displayData;
  }

  // public set DisplayData(v: any[]) {
  //   this.displayData = v;
  // }

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

  pageChanged(pageDetail: PaginatorState) {
    this.first = pageDetail.first;
    this.rows = pageDetail.rows;
    this.populateDisplayData();
  }

  ngOnChanges(simpleChange: SimpleChanges) {

    if (simpleChange.EnablePagination) {
      this.populateDisplayData();
    }

    if (simpleChange.data) {
      this.data = simpleChange.data.currentValue;
      this.totalRecords = (this.data ? this.data.length : 0);
      this.populateDisplayData();
    }

    if (simpleChange.columns) {
      this.columns = simpleChange.columns.currentValue;
    }
  }

  private populateDisplayData() {
    if (this.EnablePagination) {
      this.displayData = this.data.slice(this.first, this.first + this.rows);
    }
    else {
      this.displayData = this.data.slice(this.first, this.data.length);
    }
  }
}
