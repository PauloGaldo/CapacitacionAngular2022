import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'cap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'Capacitacion';

  constructor(private loginService: LoginService, private spinner: NgxSpinnerService) {
    this.loginService.eventAnnouncedLogin.subscribe((response) => {
      alert(response);
    });
  }

  ngOnInit(): void {
    console.log(this.title);

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
