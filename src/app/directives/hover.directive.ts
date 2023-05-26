import { Input, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  
  @Input() appHover!: string;
  @Input() defaultColor!: string;

  tag!: HTMLElement;

  constructor(
    private el: ElementRef
  ) {
    this.tag = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appHover)
    this.tag.style.backgroundColor = this.appHover || this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.tag.style.backgroundColor = '';
  }
}
