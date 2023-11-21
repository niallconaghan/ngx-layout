import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-layout-header',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
})
export class HeaderComponent {
  @Input() set height(value: number | 'auto') {
    this._height = value;
  }

  @Input() set background(value: string) {
    this._background = value;
  }

  get height(): number | 'auto' {
    return this._height;
  }

  get background() {
    return this._background;
  }

  @HostBinding('style.height.px')
  private _height: number | 'auto' = 'auto';

  @HostBinding('style.background-color')
  private _background = '';
}
