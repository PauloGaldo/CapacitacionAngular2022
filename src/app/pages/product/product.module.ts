import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
