import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CoordComponent } from './components/coord/coord.component';
import { CvComponent } from './components/cv/cv.component';
import { ExperienceProComponent } from './components/experience-pro/experience-pro.component';
import { FormationProComponent } from './components/formation-pro/formation-pro.component';
import { HomeComponent } from './components/home/home.component';
import { HomecvComponent } from './components/homecv/homecv.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SpecComponent } from './components/spec/spec.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'cv',
    component: CvComponent,
    children: [
      { path: '', redirectTo: '/cv/homecv', pathMatch: 'full' },
      { path: 'exppro', component: ExperienceProComponent },
      { path: 'formapro', component: FormationProComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'spec', component: SpecComponent },
      { path: 'coord', component: CoordComponent },
      { path: 'homecv', component: HomecvComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
