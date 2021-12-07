import { Component, Input, OnInit } from '@angular/core';
import { NumbArr } from 'src/models/NumbsArr';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  @Input() numberArray: NumbArr[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get maxNumberId(): number {
    let maxId = 0;
    if (this.numberArray.length < 1) return 0;
    let max = this.numberArray[0].value;
    for (let i = 0; i < this.numberArray.length; ++i) {
      if (this.numberArray[i].value > max) {
        max = this.numberArray[i].value;
        maxId = i;
      }
    }
    return maxId;
  }

  get minNumberId(): number {
    let minId = 0;
    if (this.numberArray.length < 1) return 0;
    let min = this.numberArray[0].value;
    for (let i = 0; i < this.numberArray.length; ++i) {
      if (this.numberArray[i].value < min) {
        min = this.numberArray[i].value;
        minId = i;
      }
    }
    return minId;
  }

  get calc(): number[] {
    let start = 0
    let end = 0

    let array = []
    if (this.minNumberId < this.maxNumberId) {
      start = this.minNumberId
      end = this.maxNumberId
    } else {
      start = this.maxNumberId
      end = this.minNumberId
    }

    for(let i = start; i <= end; i++) {
      array.push(this.numberArray[i].value)
    }
    return array
  }
}