import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'ngx-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Input() set sideMenuPosition(value: 'start' | 'end') {
    this._sideMenuPosition = value;
  }

  @Input() set fullscreenMenu(value: boolean) {
    this._fullscreenMenu = value;
  }

  @HostBinding('class.side-menu-start') get isSideMenuStart() {
    return this._sideMenuPosition === 'start';
  }

  @HostBinding('class.side-menu-end') get isSideMenuEnd() {
    return this._sideMenuPosition === 'end';
  }

  @HostBinding('class.fullscreen-menu') get isFullscreenMenu() {
    return this._fullscreenMenu;
  }

  @HostBinding('class') class = 'ngx-layout main-content';

  @HostBinding('class.header') get header() {
    return this._header;
  }

  @HostBinding('class.side-menu') get sideMenu() {
    return this._sideMenu;
  }

  @ContentChild(HeaderComponent) _header?: HTMLElement;
  @ContentChild(SideMenuComponent) _sideMenu?: HTMLElement;
  private _fullscreenMenu = false;
  private _sideMenuPosition: 'start' | 'end' = 'start';
}
