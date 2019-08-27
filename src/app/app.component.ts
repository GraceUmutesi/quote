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
    // goal.completeDate = new Date(goal.completeDate)
    this.folder.push(unique)
  }

  constructor(){ }
  
  ngOnInit(){

  }
}

// goals: Goal[] = [
//   new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,3,14)),
//   new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
//   new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12)),
//   new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
//   new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
//   new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14)),
// ];

  
