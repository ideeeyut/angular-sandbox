import { DOCUMENT } from '@angular/common';
import { Component, Directive, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[spinnerButton]',
})
export class SpinnerButtonComponent implements OnInit, OnChanges {

    @Input()
    spinnerButton = false;

    private _spinner?: HTMLElement;

    constructor(private _elementRef: ElementRef, private _renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }
        ngOnChanges(changes: SimpleChanges): void {
            const change = changes['spinnerButton'];

            if(change === undefined) return;

            if(change.isFirstChange()) return;

            if(change.currentValue) {
                this._renderer.removeChild(this._elementRef.nativeElement, this._spinner);
            } else {
                this._spinner = this.document.createElement('mat-spinner');
                // this._spinner.innerText = 'spinning';

                this._renderer.appendChild(this._elementRef.nativeElement, this._spinner);
            }
        }

    ngOnInit(): void {
    }
}
