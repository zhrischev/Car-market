import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { toArray } from 'rxjs';

@Directive({
  selector: '[priceFormat]',
})
export class PriceFormatDirective implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  ngAfterViewInit(): void {
    const text = this.elementRef.nativeElement.textContent;
    const price = text.split('').splice(7, text.length);
    for (let i = price.length; i >= 0; i -= 3) {
      price.splice(i, 0, ' ');
    }
    this.elementRef.nativeElement.textContent = price.join('') + 'лв.';
  }
}