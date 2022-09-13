import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = 'galdopaulo';

  constructor() { }

  ngOnInit(): void {
  }

  usernameReceived(event: string) {
    console.log(event);
  }

}
