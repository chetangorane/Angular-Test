import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobileNo: ['', [Validators.required, Validators.minLength(10)]],
    address: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registrationForm;
    
  }

  onSubmit(){
    console.log(this.registrationForm.value);

  }


}
