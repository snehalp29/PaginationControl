import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-scroll',
  templateUrl: './v-scroll.component.html',
  styleUrls: ['./v-scroll.component.scss']
})
export class VScrollComponent implements OnInit {

  numbers: number[] = [];
  constructor() {

    for (let i = 0; i < 10000; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {

  }

}
