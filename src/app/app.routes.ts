import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home').then((c) => c.Home);
    },
  },
  {
    path: 'login',
    loadComponent: () => {
      return import('./pages/login/login').then((c) => c.Login);
    },
  },
  {
    path: 'products',
    loadComponent: () => {
      return import('../app/pages/products/products').then((c) => c.Products);
    },
  },
];
