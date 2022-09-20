import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'cap-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(
    private router: Router,
    private clientService: ClientService,
    private configurationService: ConfigurationService,
  ) { }

  ngOnInit(): void {
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
    // this.router.navigate(['/in/client/new']);
    this.clientService.saveClient({ name: 'Paulo', lastname: 'Galdo' }).subscribe((response) => {
      console.log(response);
    });
  }

  editClient(id: number) {
    this.router.navigate([`/in/client/edit/${id}`]);
  }

}
