# ngx-layout

A simple set of customizable components to construct a full page layout.

## Install

Using npm:

```
npm install ngx-layout --save
```

## Documentation

Reference the components theme stylesheet in the styles array of the <b>angular.json</b> or the <b>project.json</b> is developing with NX.

```json
"styles": [
    ...
    "node_modules/ngx-layout/src/theme/_variables.scss",
    ...
],
```

Import <b>LayoutComponent</b>, <b>HeaderComponent</b>, <b>MainContentComponent</b> and <b>SideMenuComponent</b> into your page component.

Components that you don't use do not have to be imported.

```typescript
@Component({
  standalone: true,
  imports: [
    LayoutComponent,
    HeaderComponent,
    MainContentComponent,
    SideMenuComponent,
  ],
  selector: 'my-application',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
```

Or for non-standalone applications you can import the <b>NgxLayoutModule</b>.

```typescript
@Component({
  standalone: true,
  imports: [
    NgxLayoutModule
  ],
  selector: 'my-application',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
```

The most simple usage is to use the components on the page template.

```html
<!-- app.component.html -->
<ngx-layout>
    <ngx-layout-header> Header </ngx-layout-header>
    <ngx-layout-side-menu> Sidemenu </ngx-layout-side-menu>
    <ngx-layout-main-content> Main content </ngx-layout-main-content>
</ngx-layout>
```

You omit the header or sidemenu to achieve a header/content or sidemenu/content only layout.

## Configuration

The layout components take optional configuration via inputs:

### ngx-layout

| Property         | Type             | Description                                   | Default |
| ---------------- | ---------------- | --------------------------------------------- | ------- |
| sideMenuPosition | 'start' \| 'end' | places the sidemenu on the right or left side | 'start' |
| fullscreenMenu   | boolean          | to display the side menu as full page height  | 'false' |

### ngx-header

| Property   | Type             | Description                        | Default   |
| ---------- | ---------------- | ---------------------------------- | --------- |
| height     | number \| 'auto' | the height of the header in pixels | 'auto'    |
| background | string           | the background color of the header | undefined |

### ngx-side-menu

| Property   | Type             | Description                           | Default   |
| ---------- | ---------------- | ------------------------------------- | --------- |
| width      | number \| 'auto' | the width of the side menu in pixels  | 'auto'    |
| background | string           | the background color of the side menu | undefined |

### ngx-main-content

| Property | Type   | Description                         | Default   |
| -------- | ------ | ----------------------------------- | --------- |
| padding  | string | the padding around the main content | undefined |



### Example

```html
<ngx-layout sideMenuPosition="end" [fullscreenMenu]="true">
    <ngx-layout-header background="#0d47a1" [height]="55"> Header </ngx-layout-header>
    <ngx-layout-side-menu background="#e5e5e5" [width]="250"> Sidemenu </ngx-layout-side-menu>
    <ngx-layout-main-content padding="16px"> Main content </ngx-layout-main-content>
</ngx-layout>
```

If you perfer to configure the layout components via css you can overside the theme variables.

```css
:root {
  --ngx-layout-header__height: 55px;
  --ngx-layout-header__background-color: #0d47a1;
  --ngx-layout-side-menu__width: 250px;
  --ngx-layout-side-menu__background-color: #e5e5e5;
  --ngx-layout-main-content__background-color: transparent;
}
```

```html
<ngx-layout sideMenuPosition="end" [fullscreenMenu]="true">
    <ngx-layout-header> Header </ngx-layout-header>
    <ngx-layout-side-menu> Sidemenu </ngx-layout-side-menu>
    <ngx-layout-main-content padding="16px"> Main content </ngx-layout-main-content>
</ngx-layout>
```

