import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { AuthClientGuard } from './services/auth-client.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: ClientListComponent,
        // canLoad: [AuthClientGuard],
      },
      {
        path: 'new',
        component: ClientFormComponent,
      },
      {
        path: 'edit/:idClient',
        component: ClientFormComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthClientGuard,
  ]
})
export class ClientRoutingModule { }