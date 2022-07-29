import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  public Spinning = false;

  ngOnInit(): void {
  }

  public toggleSpinner(): void {
    this.Spinning = !this.Spinning;
  }
}
