import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  submited:boolean;
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobileNo: ['', [Validators.required, Validators.minLength(10)]],
    address: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router , private userService:UserService) { }

  ngOnInit() {
    this.registrationForm;
    
  }

  onSubmit(){
this.    submited=true;
if(this.registrationForm.valid){

  console.log(this.registrationForm.value);
  this.userService.addToData(this.registrationForm.value);
}
  }


}
