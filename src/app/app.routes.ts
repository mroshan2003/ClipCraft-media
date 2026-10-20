import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ClipCraft Media — Premium Digital Marketing, Video Editing & Personal Branding Agency'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
