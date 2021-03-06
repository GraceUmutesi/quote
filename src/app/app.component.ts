import { Component, OnInit } from '@angular/core';
import { FirstQuote } from './first-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  folder: FirstQuote []=[
    new FirstQuote (1, 'If you can dream it, you can do it.','written by Billy cannolly.',new Date(2015,5,9)),
    new FirstQuote(2,"Never let anyone treat you like a yellow starbust,you're a pink starbust.",'written by anonymous.',new Date(2019,8,24)),
    new FirstQuote(3,'You get in life what you have the courage to ask for.','written by Oprah Winfrey',new Date(2018,2,15)),
  ];
  
  toggleMore(index){
    this.folder[index].showDetail = !this.folder[index].showDetail;

  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.folder[index].description}?`)

      if (toDelete){
        this.folder.splice(index,1)
      }
    }
  }

  addNewQuote(unique){
    let quoteLength = this.folder.length;
    unique.id = quoteLength+1;
    this.folder.push(unique)
  }
  upVote=0;
  displayVote(){
    this.upVote+=1;
  }
  downVote=0
  showVote(){
    this.downVote+=1;
  }

  constructor(){ }
  
  ngOnInit(){

  }
}



  
