import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-other-child-component',
  template: `
    <h2>The Other Child Component</h2>
    <div class="container">
       <strong>
          {{Message}}
       </strong>
    </div>
  `
})

export class OtherChildComponent implements OnInit, OnChanges {
  private _Message:string;
  constructor() {
    console.log('The Other Component Constructor');

    this._Message = 'Hello!!!, I am the Other Child Component.... ';
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('The ngOnChanges is called on ngOnChanges');

  }

 // @Input()
  set Message(val:string){
    this._Message = val;
  }

  get Message():string {
    return this._Message;
  }

}
