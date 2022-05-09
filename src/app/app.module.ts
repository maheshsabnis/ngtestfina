import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualChildComponent } from './components/templateref/app.actualchild.component';
import { ChildComponent } from './components/templateref/app.child.component';
import { OtherChildComponent } from './components/templateref/app.otherchild.component';
import { ParentComponent } from './components/templateref/app.parent.component';
import { EncyptDcyptComponent } from './components/encyptdcypt/app.encyptdcypt.component';
import { CardComponent } from './components/litelementuser/app.card.component';

@NgModule({
  declarations: [
    AppComponent, ParentComponent, ChildComponent, OtherChildComponent,ActualChildComponent,
    CardComponent,
    EncyptDcyptComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
