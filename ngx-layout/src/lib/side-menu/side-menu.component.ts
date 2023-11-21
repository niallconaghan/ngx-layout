import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-layout-side-menu',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
})
export class SideMenuComponent {
  @Input() set width(value: number | 'auto') {
    this._width = value;
  }

  @Input() set background(value: string) {
    this._background = value;
  }

  get width(): number | 'auto' {
    return this._width;
  }

  get background() {
    return this._background;
  }

  @HostBinding('style.width.px')
  private _width: number | 'auto' = 'auto';

  @HostBinding('style.background-color')
  private _background = '';
}
