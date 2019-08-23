import { Component } from '@angular/core';
import { FirstQuote } from './first-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  folder: FirstQuote []=[
    {id:1, description:"If you can dream it, you can do it."},
    {id:2,description:"Never let anyone treat you like a yellow starbust,you're a pink starbust."},
    {id:3,description:"You get in life what you have the courage to ask for."},
  ];
  
}
