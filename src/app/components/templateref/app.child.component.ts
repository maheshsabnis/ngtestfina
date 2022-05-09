import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <h2>The Child Component</h2>
    <div class="container">
      <strong>
        {{ValueProperty}}
      </strong>
    </div>

  `
})

export class ChildComponent implements OnInit {
  private _ValueProperty:number;
  constructor() {
    this._ValueProperty = 0;
  }

  ngOnInit() { }

  set ValueProperty(v:number){

    this._ValueProperty = v;
  }
  get ValueProperty():number{
    return this._ValueProperty;
  }

}
