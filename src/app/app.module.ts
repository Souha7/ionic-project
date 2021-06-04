import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            ReactiveFormsModule,
            FormsModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireAuthModule,
            AngularFireStorageModule,
            AngularFireDatabaseModule,
            IonicStorageModule.forRoot()
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
