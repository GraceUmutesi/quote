import { Component, OnInit } from '@angular/core';
import { FirstQuote } from '../first-quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new FirstQuote(0,"","");//new Date() to be added
  constructor() { }

  ngOnInit() {
  }

}
