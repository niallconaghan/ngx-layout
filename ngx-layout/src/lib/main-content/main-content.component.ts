import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-layout-main-content',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
})
export class MainContentComponent {
  @Input() set padding(value: string) {
    this._padding = value;
  }

  get padding(): string | undefined {
    return this._padding;
  }

  private _padding?: string;

  @HostBinding('style.padding') get hostPadding() {
    return this._padding;
  }
}
