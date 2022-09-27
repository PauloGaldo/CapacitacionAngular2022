import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[capHighlight]'
})
export class HighlightDirective implements OnChanges, OnInit {

  @Input() capHighlight!: string;

  constructor(
    // private elementRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {

  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.capHighlight);
    // this.elementRef.nativeElement.style.backgroundColor = this.capHighlight;
  }

  @HostListener('click') onMouseClick() {
    console.log(this.capHighlight);
    // console.log(this.elementRef);
    // this.elementRef.nativeElement.style.display = 'none';
  }

}
