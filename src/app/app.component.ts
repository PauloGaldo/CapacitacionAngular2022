import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'cap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'Capacitacion';

  constructor(private loginService: LoginService) {
    this.loginService.eventAnnouncedLogin.subscribe((response) => {
      alert(response);
    });
  }

  ngOnInit(): void {
    console.log(this.title);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
