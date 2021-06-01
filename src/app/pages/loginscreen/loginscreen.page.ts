import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import{AuthService} from 'src/app/services/auth.service';

import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  validationUserMessage ={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect.Please Try again ♥"}
    ],
    password:[
      {type:"required", message:"Please Enter your Password"},
      {type:"minlength", message:"The Password must be at least 3 characters"}

    ]
  }



validationFormUser: FormGroup;

  constructor(public formbuilder: FormBuilder, public authservice: AuthService,private router: Router) { }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))
    })
  }
    LoginUser(value){
      console.log("You're logged in");

      try{
        this.authservice.loginFireauth(value).then( resp =>{
          console.log(resp);
          this.router.navigate(['tabs'])
        })

      }catch(err){
        console.log(err);
      } 
  }

}


