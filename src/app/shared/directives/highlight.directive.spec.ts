import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ElementRef, LOCALE_ID, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { ClientListComponent } from 'src/app/pages/client/components/client-list/client-list.component';
import { ClientService } from 'src/app/pages/client/services/client.service';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {

  let fixture: ComponentFixture<ClientListComponent>;
  let elementRef: ElementRef;
  let templateRef: TemplateRef<any>;
  let viewContainerRef: ViewContainerRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, BrowserAnimationsModule],
      declarations: [ClientListComponent, HighlightDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        TemplateRef,
        ViewContainerRef,
        ClientService,
        ConfigurationService,
        { provide: LOCALE_ID, useValue: 'es-AR' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientListComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });



});
