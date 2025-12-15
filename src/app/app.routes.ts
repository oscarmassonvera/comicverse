import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BlogCard } from './components/blog-card/blog-card';

export const routes: Routes = [

     { path: '', component: HomeComponent },
     { path: 'pagina', component: BlogCard }
];
