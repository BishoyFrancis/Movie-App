import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({

    email: new FormControl (null , [Validators.email,Validators.required ,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)]),
    password :new FormControl(null , [Validators.required , Validators.pattern(/^([a-zA-Z0-9@*#]{8,15})$/)]),



    });

    formInfo(formInfo:any){
      console.log(formInfo);

     }



  constructor() { }

  ngOnInit(): void {
  }

}
