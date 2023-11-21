import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxLayoutModule } from '@niallconaghan/ngx-layout';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgxLayoutModule,
    FormsModule,
    NgIf,
    MarkdownComponent,
  ],
  selector: 'ngx-layout-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sideMenuPosition: 'start' | 'end' = 'start';
  fullscreenMenu = false;

  showHeader = true;
  showSideMenu = true;

  headerHeight = 75;
  sideMenuWidth = 250;
  headerColor = '#0d47a1';
  sideMenuColor = '#e5e5e5';

  responsiveSidemenu = false;

  path = `../assets/README.md`;
}
