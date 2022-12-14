import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types-interface/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: RegisterForm = {
    email: '',
    password: '',
    passwordAgain: '',
  };

  passwordMatched : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

    if(this.formRegister.password != this.formRegister.passwordAgain){
        this.passwordMatched = false;
        return;
    }


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.formRegister.email, this.formRegister.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

}
