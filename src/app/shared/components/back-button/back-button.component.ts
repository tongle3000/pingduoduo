import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent implements OnInit {

  @Input() float = true;
  get imageUrl() {
    return this.float
      ? `assets/icons/back_light.svg`
      : `assets/icons/back_dark.svg`;
  }
  constructor(private location: Location) { }

  ngOnInit() {
  }
  handleBack() {
    this.location.back();
  }
}
