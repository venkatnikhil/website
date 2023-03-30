import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeMap } from 'src/environments/environment';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [{ path: routeMap.HOME, component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
