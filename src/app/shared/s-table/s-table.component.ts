import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { UserData } from 'src/app/users/user.model';

@Component({
  selector: 'app-s-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.sass'],
})
export class STableComponent implements OnInit {
  @Input() data: UserData[];
  @Input() columns: string[];
  picked = 'picked';
  @Input() ShowFooter = false;
  @Input() showHeader = true;
  @Input() EnablePagination = false;

  @ContentChild('header', { static: false })
  selectedHeaderTemplateRef: TemplateRef<any>;

  @ContentChild('footer', { static: false })
  selectedFooterTemplateRef: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
