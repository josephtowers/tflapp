import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { SkinComponent } from './skin/skin.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'skin', component: SkinComponent },
  { path: 'about', component: AboutComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageNotFoundComponent,
    ListComponent,
    AboutComponent,
    SkinComponent
  ],
  imports: [
    BrowserModule,
    RoundProgressModule,
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
