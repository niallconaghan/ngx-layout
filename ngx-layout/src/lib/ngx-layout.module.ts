import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  imports: [
    LayoutComponent,
    HeaderComponent,
    MainContentComponent,
    SideMenuComponent,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    MainContentComponent,
    SideMenuComponent,
  ],
})
export class NgxLayoutModule {}
