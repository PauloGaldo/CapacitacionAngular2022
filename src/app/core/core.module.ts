import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../pages/product/product.module';
import { ClientModule } from '../pages/client/client.module';
import { CustomHttpInterceptor } from './services/custom-http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigurationService } from './services/configuration.service';

const APP_MODULES = [
  ProductModule,
  ClientModule,
];

export function configurationServiceFactory(configurationService: ConfigurationService) {
  return () => configurationService.load();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...APP_MODULES,
  ],
  exports: [
    ...APP_MODULES,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: configurationServiceFactory,
      deps: [
        ConfigurationService,
      ],
      multi: true,
    },
  ]
})
export class CoreModule { }
