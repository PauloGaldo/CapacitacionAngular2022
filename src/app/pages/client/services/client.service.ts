import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Client } from 'src/app/core/entities/client.entity';

@Injectable()
export class ClientService {

  public clients: Client[] = [];

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getCountryByName(name: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }

  getAllClients(): Observable<Client[]> {
    return of(this.clients).pipe(
      delay(1000)
    );
  }

  saveClient(client: Client) {
    this.clients.push(client);
    return of(this.clients).pipe(
      delay(1000)
    );
  }

}
