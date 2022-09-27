import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ClientService', () => {
  let service: ClientService;
  let httpClient: HttpClient;
  let httpTestingControler: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingControler = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

    // httpClient.get('').subscribe((response) => {
    //   expect(response).toBeTruthy();
    // });

    // const request = httpTestingControler.expectOne('/loque-sea');

    // expect(request.request.method).toEqual('GET');

  });
});
