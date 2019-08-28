export class FirstQuote  {
  public upVote:boolean;
  public downVote:boolean;
  public showDetail: boolean;
  constructor(public id: number,public description: string,public detail: string,public completeDate: Date){
    this.showDetail=false;
  }
}

