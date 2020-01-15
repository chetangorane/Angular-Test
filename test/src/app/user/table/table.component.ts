import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  usersList:any;
  constructor(  private userService:UserService) { }

  ngOnInit() {
this.usersList=this.userService.getUsersData();


    console.log(this.usersList);
  }

}
