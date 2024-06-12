import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo:'profiles'},
  { path: 'profiles', component: ProfilesComponent },
  { path: 'add-profile', component: AddProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
