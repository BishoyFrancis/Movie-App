import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup = new FormGroup({

  fristName: new FormControl (null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
  lastName : new FormControl (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
  age : new FormControl (null , [Validators.required , Validators.min(10) , Validators.max(60)]),
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
