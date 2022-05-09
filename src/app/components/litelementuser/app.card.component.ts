import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import './../../litelenments/card-user';
import { CardUser } from './../../litelenments/card-user';
import {User} from './../../litelenments/user';
@Component({
  selector: 'app-card-component',
  templateUrl: './app.card.view.html'
})

export class CardComponent implements OnInit {
  frmUser:FormGroup;
  user:User;
  user1:User;
  // user: User = {
  //   id: 2,
  //   fullName: 'Luis',
  //   role: 'Software Engineer',
  //   avatar: 'https://luixaviles.com/images/avatar@2x.png',
  // };
  card:CardUser;
  constructor() {
    this.user =  {
        id: 2,
        fullName: 'Luis',
        role: 'Software Engineer',
        avatar: 'https://luixaviles.com/images/avatar@2x.png',
      };

      this.user1=  {
        id: 0,
        fullName: '',
        role: '',
        avatar: '',
      };

      this.frmUser = new FormGroup({
        "id":new FormControl(this.user.id),
        "fullName":new FormControl(this.user.fullName),
        "role":new FormControl(this.user.role),
        "avatar":new FormControl(this.user.avatar),
      });

   }

  ngOnInit() { }
  edit(event: Event) {
    const user = (event as CustomEvent<User>).detail;
    alert(JSON.stringify(user));
  }

  clear():void {
    this.user ={id:0, fullName:'', role:'', avatar:''};
    console.log(JSON.stringify(this.user));
    this.frmUser.setValue(this.user);
  }
  save():void {
    // this.user =  {
    //   id: 2,
    //   fullName: 'Luis',
    //   role: 'Software Engineer',
    //   avatar: 'https://luixaviles.com/images/avatar@2x.png',
    // };
    this.user1 = this.frmUser.value;
    console.log(JSON.stringify(this.user1) + JSON.stringify(this.frmUser.value));
  }
}
