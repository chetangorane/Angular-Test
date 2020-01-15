import { Injectable } from '@angular/core';
import { TableComponent } from './table/table.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user=[];
  // router: any;

  constructor() { 

  }

setLocalStorageData(params){
  this.user.push(params);
  localStorage.setItem('usersList'  ,JSON.stringify(this.user));
}
getLocalStorageData(){
let data=  localStorage.getItem('usersList');
this.user=data? JSON.parse(data):[];
}

  addToData(params) {

    this.setLocalStorageData(params);
    return this.user;
    // this.user.push(params);
    // return localStorage.setItem('usersList','user');
    // return;
    // setTimeout(() => {
    //   this.router.navigate(['./input']);
    // }, 250);
  }

  getUsersData(){
     this.getLocalStorageData();
     return this.user;
  }
}
