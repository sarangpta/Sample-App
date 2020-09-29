import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './components/screens/comp-one/comp-one.component';
import { CompThreeComponent } from './components/screens/comp-three/comp-three.component';
import { CompTwoComponent } from './components/screens/comp-two/comp-two.component';

const routes: Routes = [
  { path: 'Component_One', component: CompOneComponent },
  { path: 'Component_Two', component: CompTwoComponent },
  { path: 'Component_Three', component: CompThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
