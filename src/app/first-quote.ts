export class FirstQuote  {
    showDetail: boolean;
    constructor(public id: number,public description: string,public detail: string){
      this.showDetail=false;
    }
  }