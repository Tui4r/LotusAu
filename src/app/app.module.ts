import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CoverComponent } from './components/cover/cover.component';
import { ListComponent } from './components/list/list.component';
import { OrderComponent } from './components/order/order.component';
import { EditmenuComponent } from './components/editmenu/editmenu.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { RegistorComponent } from './components/registor/registor.component';

const config = {
  apiKey: 'AIzaSyCzF3pQCpNl6K5IuqDsRqepNR2q1kVjHpo',
  authDomain: 'graduation-project-food-court.firebaseapp.com',
  databaseURL: 'https://graduation-project-food-court.firebaseio.com/',
  projectId: 'graduation-project-food-court',
  storageBucket: 'graduation-project-food-court.appspot.com',
  messagingSenderId: '1032934460442',
  appId: '1:1032934460442:web:c05e0b7d438c84200c95a3',
};

const routes: Routes = [
  { path: '', component: CoverComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'order', component: OrderComponent },
  { path: 'edit', component: EditmenuComponent },
  { path: 'nav', component: NavigatorComponent },
  { path: 'signup', component: RegistorComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CoverComponent,
    ListComponent,
    OrderComponent,
    EditmenuComponent,
    NavigatorComponent,
    RegistorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
