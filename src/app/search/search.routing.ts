import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

const searchRoutes: Routes = [
  {
    path: 'home',
    component: SearchComponent,
    data: {
      title: 'Search Page'
    }
  }
];

export const searchRouting: ModuleWithProviders = RouterModule.forRoot(searchRoutes);
