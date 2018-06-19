import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    // This is to redirect the application to home page when URL is empty
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
