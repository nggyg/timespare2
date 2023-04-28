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
  @Input() activity: activity | null = null;
  @Output() edit = new EventEmitter<activity>();
  constructor(private activityService: ActivityService) {

  }
  uid: number = 3;
  inputValue:string="665";
  defActTitle:string="tbd";
  defActTime:number=0;
  activitiesFromDB:activity[]=[];
  activities: activity[] = [
    {
      id:1,
      title: 'cycling',
      time: 30
    },
    {
      id:2,
      title: 'reading',
      time:60
    }
  ];
  getUID():number{
    return this.uid++;
  }
  setDefTitle(newTitle:string):void{
    this.defActTitle=newTitle;
  }
  setDefTime(newTime:number):void{
    this.defActTime=newTime;
  }
  newActivity(name:string,time:number):void{
    let nr=this.getUID();
    let newActivity={id:nr,title:name,time:time};
    this.activities.push(newActivity)
    this.activityService.addActivity(newActivity);
  }
  getActivities(){
    this.activityService.getActivities().subscribe(result=>
      {
        this.activitiesFromDB = result;
      });
  }

}
