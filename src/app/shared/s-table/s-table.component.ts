import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { UserData } from 'src/app/users/user.model';
import { Column } from './Column';

@Component({
  selector: 'app-s-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.sass'],
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

  constructor() {}

  ngOnInit(): void {}
}
