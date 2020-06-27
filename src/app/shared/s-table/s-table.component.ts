import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Column } from './Column';
import { PageChange } from '../s-paginator/s-paginator.component';

@Component({
  selector: 'app-s-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss'],
})
export class STableComponent implements OnInit {
  /**
   *
   * An Input data
   *
   */
  @Input() data: any[];

  /**
   * An array of objects to represent dynamic columns.
   */
  @Input() columns: Column[];
  @Input() ShowFooter = false;
  @Input() EnablePagination = false;

  @ContentChild('body', { static: false })
  selectedBodyTemplateRef: TemplateRef<any>;

  @ContentChild('footer', { static: false })
  selectedFooterTemplateRef: TemplateRef<any>;

  @Output()
  UpdateData: EventEmitter<PageChange> = new EventEmitter<PageChange>();

  constructor() {}

  ngOnInit(): void {}

  updateTable(pageDetail: PageChange) {
    console.log(pageDetail);

    this.UpdateData.next(pageDetail);
  }
}
