import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientService } from './services/client.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientFormComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ClientRoutingModule,    
  ],
  providers: [
    ClientService,
  ],
})
export class ClientModule { }
