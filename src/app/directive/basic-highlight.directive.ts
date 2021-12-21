import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','green');
  }

  @HostListener('mousedown') mouseDown(event:Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ffd166');
  }

  @HostListener('mouseup') mouseUp(event:Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ef476f');
  }

}
