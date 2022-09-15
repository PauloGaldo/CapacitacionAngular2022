import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../pages/product/product.module';
import { ClientModule } from '../pages/client/client.module';

const APP_MODULES = [
  ProductModule,
  ClientModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...APP_MODULES,
  ],
  exports: [
    ...APP_MODULES,
  ]
})
export class CoreModule { }
