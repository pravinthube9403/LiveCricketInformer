import { Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import path from 'path';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
   {
      path:'',
      redirectTo:'/live',
      pathMatch:'full'
   },
     {
        path:"history",
        component:HistoryComponent,
        title:"Match | History | CrickInformer",
     },
     {
        path:"live",
        component:LiveComponent,
        title:"Live Matches | CrickInformer",
     },
     {
        path:"point-table",
        component:PointTableComponent,
        title:"Point Table | CrickInformer",
     },
];
