export class FirstQuote  {
    public showDetail: boolean;
    constructor(public id: number,public description: string,public detail: string,public completeDate: Date){
      this.showDetail=false;
    }
  }

  // export class Goal {
  //   public showDescription: boolean;
  //   constructor(public id: number,public name: string,public description: string, public completeDate: Date){
  //     this.showDescription=false;
  //   }
  // }