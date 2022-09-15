import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'cap-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input('user') username: string | null | undefined = undefined;

  @Output() onClick = new EventEmitter<string>();

  public formLogin!: FormGroup;
  public email: string = 'email@mail.com';

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    console.log(this.username);
  }

  ngOnInit(): void {
    console.log(this.username);
    this.formLogin = this.formBuilder.group({
      email: [this.email, [Validators.required, Validators.maxLength(10), Validators.email]],
      password: [null, [Validators.required]],
      array: this.formBuilder.array([])
    });

    this.formLogin.get('email')?.valueChanges.subscribe((value) => {

      // this.formLogin.get('password')?.patchValue(value);
    });

    // this.formLogin.patchValue({
    //   email: '',
    //   password: ''
    // });
  }

  buttonClicked(): void {
    // this.onClick.emit(this.username!);
    this.loginService.sendLogin(this.username!);
  }

  login(formLogin: FormGroup) {
    console.log(formLogin);
    console.log(this.email);
    this.formLogin.reset();
  }

}
