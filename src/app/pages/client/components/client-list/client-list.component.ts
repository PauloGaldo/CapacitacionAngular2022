import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, zip } from 'rxjs';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'cap-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  animations: [
    trigger('animation', [
      state('off', style({ background: 'white', fontSize: '10p' })),
      state('on', style({ background: 'black', fontSize: '20p', color: 'white' })),
      transition('off <=> on', animate('0.9s 0.3s ease')),
    ]),
  ]
})
export class ClientListComponent implements OnInit {

  public numero = 100.5;
  public fecha = new Date();

  public trigger: string = 'off';

  constructor(
    private router: Router,
    private clientService: ClientService,
    private configurationService: ConfigurationService,
    // private DatePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.trigger = 'on';
    }, 1000);
    forkJoin(
      [
        this.clientService.getAll(),
        this.clientService.getCountryByName('argentina'),
        this.clientService.getAllClients(),
      ]
    ).subscribe((response) => {
      console.log(response);
    }, (error) => {

    });
    this.clientService.getAll().subscribe((response) => {
      // console.table(response);
      this.clientService.getCountryByName('argentina').subscribe((response) => {
        console.log(response);
        console.log(this.configurationService.permissions);
      });
    });
    this.clientService.getAllClients().subscribe((response) => {
      console.log(response);
    });
  }

  addNewClient() {
    this.router.navigate(['/in/client/new']);
    // this.clientService.saveClient({ name: 'Paulo', lastname: 'Galdo' }).subscribe((response) => {
    //   console.log(response);
    // });
  }

  editClient(id: number) {

    let value = new CapitalizePipe().transform('texto a transformar');
    // let value2 = this.DatePipe.transform(new Date(), 'fullDate');
    console.log(value);
    // console.log(value2);

    this.router.navigate([`/in/client/edit/${id}`]);
  }

}
