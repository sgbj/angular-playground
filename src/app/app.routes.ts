import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'table-of-contents',
    loadComponent: () =>
      import('./table-of-contents.component').then(
        (m) => m.TableOfContentsComponent
      ),
  },
  {
    path: 'overflow-menu',
    loadComponent: () =>
      import('./overflow-menu.component').then((m) => m.OverflowMenuComponent),
  },
];
