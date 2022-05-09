import { Component, OnInit,Input,AfterViewInit,AfterContentInit,  OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-actual-child-component',
  template: `
    <h2>The Actual Child</h2>
    <div class="container">
      <strong>{{Message}}</strong>
    </div>
  `
})
export class ActualChildComponent implements OnInit,AfterViewInit,AfterContentInit, OnChanges {
  private _Message:string;
  constructor() {
    console.log('The Actual Child Component Constructor called');
    this._Message = "";
  }

  ngOnInit() {
    console.log('The Actual Child Component ngOnInit called');
  }
  ngAfterViewInit(): void {
      console.log('The Actual Child Component ngAfterViewInit called');
  }
ngAfterContentInit(): void {
  console.log('The Actual Child Component ngAfterContentInit called');
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('The Actual Child Component ngOnChanges called');
}

  @Input()
  set Message(val:string){
    this._Message = val;
  }

  get Message():string {
    return this._Message;
  }

}
