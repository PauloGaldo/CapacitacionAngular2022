import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TranslateModule } from '@ngx-translate/core';


const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
];

const SHARED_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  TranslateModule,
];

const SHARED_COMPONENTS = [
  LoginComponent,
  LoginFormComponent,
  HighlightDirective,
  CapitalizePipe,
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    ...SHARED_MODULES,
  ],
  exports: [
    ...MATERIAL_MODULES,
    ...SHARED_COMPONENTS,
    ...SHARED_MODULES,
  ],
})
export class SharedModule { }
