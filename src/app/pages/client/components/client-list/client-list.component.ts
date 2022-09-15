import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cap-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addNewClient() {
    this.router.navigate(['/in/client/new']);
  }

  editClient(id: number) {
    this.router.navigate([`/in/client/edit/${id}`]);
  }

}
