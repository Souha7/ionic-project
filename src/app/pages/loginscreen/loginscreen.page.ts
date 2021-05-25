import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  ValidationUserMessage ={
    email:[
      {type:"required", message:"Please Enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect,please Try again"}
    ],
    password:[
      {type:"required", message:"Please Enter your Password"},
      {type:"minlength", message:"The Password must be at least 5 Character"}
    ]
  }



validationFormUser: FormGroup;

  constructor(public formbuilder: FormBuilder) { }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]@[a-zA-Z0-9-]+.[a-zA-Z0-9_.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ]))
    })
  }
    LoginUser(value){
      console.log("You're logged in")
    }

  }


