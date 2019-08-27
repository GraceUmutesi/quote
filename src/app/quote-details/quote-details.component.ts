import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FirstQuote} from '../first-quote'


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  // folder: FirstQuote []=[
  //   new FirstQuote (1, 'If you can dream it, you can do it.','written by Billy cannolly.'),
  //   new FirstQuote(2,"Never let anyone treat you like a yellow starbust,you're a pink starbust.",'written by anonymous.'),
  //   new FirstQuote(3,'You get in life what you have the courage to ask for.','written by Oprah Winfrey'),
  // ];
  // toggleMore(index){
  //   this.folder[index].showDetail = !this.folder[index].showDetail;

  // }
  // quoteDelete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }

  @Input()folder: FirstQuote;
  @Output() isComplete = new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
        this.isComplete.emit(complete);
      }

  constructor() { }

  ngOnInit() {
  }

}


// export class GoalDetailComponent implements OnInit {

//   @Input() goal: Goal;
//   @Output() isComplete = new EventEmitter<boolean>();

//   goalComplete(complete:boolean){
//     this.isComplete.emit(complete);
//   }
//   constructor() { }

//   ngOnInit() {
//   }

// }
