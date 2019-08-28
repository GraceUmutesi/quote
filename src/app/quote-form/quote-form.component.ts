import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirstQuote } from '../first-quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new FirstQuote(0,"","",new Date());
  @Output() addQuote = new EventEmitter<FirstQuote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}


