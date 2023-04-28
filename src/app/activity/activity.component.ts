import { Component, Input, Output, EventEmitter } from '@angular/core';
import { activity } from '../model/activity';
import { Title } from '@angular/platform-browser';
import { ActivityService } from '../Services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
[x: string]: any;
  @Input() activity: activity | null = null;
  @Output() edit = new EventEmitter<activity>();
  constructor(private activityService: ActivityService) {

  }
  uid: number = 3;
  inputValue:string=""
  inputValue2:number=0
  defActTitle:string="tbd"
  defActTime:number=0;
  activitiesFromDB:activity[]=[];
  activities: activity[] = this.getActivities();
 
  getUID():number{
    let newID:number=0
    this.activities.forEach( (item, index) => {
      if(item.id >= newID)
       newID=item.id;
    });
    return newID+1;
  }
  setDefTitle(newTitle:string):void{
    this.defActTitle=newTitle;
  }
  setDefTime(newTime:number):void{
    this.defActTime=newTime;
  }
  newActivity(name:string,time:number):void{
    let nr=this.getUID();
    let newActivity={id:nr,title:name,time:time,visible:true};
    this.activities.push(newActivity)
    this.activityService.addActivity(newActivity);
  }
  getActivities(): activity[]{
    let res:any=[];
    this.activityService.getActivities().subscribe(result=>
      {
        this.activities= result;
        res=result;
      });
      return res;
  }
  removeActivity(targetId:number){
    this.activities.forEach( (item, index) => {
      if(item.id === targetId)
       item.visible=false;
    });
 }

}
