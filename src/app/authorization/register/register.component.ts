import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
  }

  registerFormGroup : FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required,Validators.email]),
    username : new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
    password : new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
    repeatPassword : new FormControl(''),
    gender : new FormControl('', [Validators.required])
  });

  
}
