import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private updates: SwUpdate) {   
    
  }

  checkForUpdates(){
    this.updates.checkForUpdate();
    this.updates.versionUpdates.subscribe((response) => {
      console.log(response);
    });
  }

}
