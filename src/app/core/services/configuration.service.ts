import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  public permissions: any;

  constructor() { }

  load() {
    console.log('cargo primero yo');
    this.permissions = { security: true };
  }

}
