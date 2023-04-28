import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { activity } from '../model/activity';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore'

@Injectable({
    providedIn: 'root'
  })

  export class ActivityService{
    constructor(private fs:Firestore){

    }
    getActivities():Observable<activity[]>{
        console.log(this.fs);
        const myCollection: any = collection(this.fs, 'activities');
        return collectionData(myCollection);
    }
    addActivity(student:activity){
        const myCollection = collection(this.fs, 'activities')
        addDoc(myCollection, student);
      }
  }