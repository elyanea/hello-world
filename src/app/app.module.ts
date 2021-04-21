import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceProComponent } from './components/experience-pro/experience-pro.component';
import { FormationProComponent } from './components/formation-pro/formation-pro.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SpecComponent } from './components/spec/spec.component';
import { CoordComponent } from './components/coord/coord.component';
import { HomecvComponent } from './components/homecv/homecv.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavHeaderComponent,
    HomeComponent,
    CvComponent,
    ContactComponent,
    ExperienceProComponent,
    FormationProComponent,
    ProfilComponent,
    SpecComponent,
    CoordComponent,
    HomecvComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
