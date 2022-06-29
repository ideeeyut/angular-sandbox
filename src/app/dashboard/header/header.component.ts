import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  public title!: string;

  @Input()
  public addButtonText!: string;

  constructor() {}

  ngOnInit(): void {}

  public click(): void {
      
  }
}
