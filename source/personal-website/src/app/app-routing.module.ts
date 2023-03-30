import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeMap } from 'src/environments/environment';
import { HomeComponent } from './main/home/home.component';
import { TestComponent } from './main/test/test.component';

const routes: Routes = [
  { path: routeMap.HOME, component: HomeComponent },
  { path: routeMap.TEST, component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
