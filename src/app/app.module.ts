import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityComponent } from './activity/activity.component';
import {MatCardModule} from '@angular/material/card'
import {MatListModule}from '@angular/material/list'
import {MatIconModule}from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { initializeApp,getApp,provideFirebaseApp,FirebaseAppModule } from "@angular/fire/app";
import { getAnalytics } from "firebase/analytics";
import {config} from './config/config'
import { FirestoreModule } from '@angular/fire/firestore';
import{Component}from '@angular/core'
import {MatGridListModule} from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent
  ],
  imports: [
    provideFirebaseApp(()=>initializeApp(config.firebase)),
    FirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
