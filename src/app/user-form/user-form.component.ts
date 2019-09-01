import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../custom.validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  signInForm: FormGroup;
  toggleLogin: boolean = true;
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { 

    this.signInForm = this.fb.group({
      email: ['i@i.com' , [CustomValidators.email, Validators.minLength(10)]],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit() {
  }

  login(){
    console.log(this.signInForm.value);
    this.userService.postUser(this.signInForm.value)
                    .subscribe(
                      res => console.log(res),
                      err => console.log(err),
                      () => console.log("DONE")
                    );
  }

  createAccount(){
    
  }

  showSignUp(){
    this.toggleLogin = false;
  }
  showSignIn(){
    this.toggleLogin = true;
  }
}
