import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input()
  public title!: string;

  @Input()
  public buttonText!: string;

  private _isSearchSupported = false;

  public get isSearchSupported(): boolean {
    return this._isSearchSupported;
  }

  private _isSortSupported = false;

  public get isSortSupported(): boolean {
    return this._isSortSupported;
  }

  constructor() {}

  ngOnInit(): void {}

  public add(): void {}
}
