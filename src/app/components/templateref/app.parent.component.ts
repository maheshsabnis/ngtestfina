import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {OtherChildComponent} from './app.otherchild.component';
@Component({
  selector: 'app-parent-component',
  templateUrl: './app.parent.view.html'
})
// If we want to write component initialization code that uses
// the references injected by @ViewChild, we need to do it
// inside the AfterViewInit lifecycle hook.
export class ParentComponent implements OnInit,AfterViewInit {
  message:string;
  @ViewChild('otherChildComponent')
   otherChildComponent:OtherChildComponent;

  constructor() {
   // this.otherChildComponent = new OtherChildComponent();
   // console.log('Constructor Called');
   this.message = "";
  }

  send(val:any){
     val.value = 1000;
  }

  pass(value:any){
     value.ValueProperty= 1000;
 }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log(this.otherChildComponent.Message);
  }

  sendpass():void {
    this.otherChildComponent.Message = "Thew New Message";
  }
}
