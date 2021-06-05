import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


import {AuthService} from 'src/app/services/auth.service';
import {AlertController, NavController,LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  public ValidationFormUSer : FormGroup;
  loading:any

  constructor(public formbuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private navCtr: NavController,
              public loadingCtrl : LoadingController,
              private alertCtrl: AlertController) {

    this.ValidationFormUSer = this.formbuilder.group({

      name: ["",[Validators.required, Validators.minLength(3)]],
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(3),Validators.maxLength(15)]]
      
    })
    this.loading = this.loadingCtrl
  }
  ngOnInit() {
  }

  registerUser(value){
    console.log('registerUser');
    this.showalert();
     try{
      this.authService.userRegistration(value).then( response =>{
      console.log(response);
      if(response.user){
        response.user.updateProfile({
          displayName: value.name,
          email: value.email,
          
        });
        this.loading.dismiss();
        this.router.navigate(['loginscreen']);
      }

      }, error=>{
      this.loading.dismiss();
      this.errorLoading(error.message);
 
    })

    }catch(erro){
      console.log(erro)
    }
   }
 
 
   async errorLoading(message: any){
     const loading = await this.alertCtrl.create({
       header:"Error Registering",
       message:message,
       buttons:[{
         text:'ok',
         handler: ()=>{
         this.navCtr.navigateBack(['signup'])
       }
       }]
     })
      await loading.present();
  }
 
 
 
 
   async showalert(){
    var load = await this.loadingCtrl.create({
    message:"please wait....",
 
  })
   load.present();
 }

  showpassword = false;
  passwordToggleIcon = 'eye';

  togglePassword():void {
    this.showpassword = !this.showpassword;

    if(this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  }

 
}
