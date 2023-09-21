import { Component , EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent {
  studentName:string = ""
  studentAge:number | string = ""
  studentList :{studentName:string , studentAge:number | string }[] = []

  @Output() myEvent = new EventEmitter()


  addStudent(){
    // console.log(this.studentName);
    // console.log(this.studentAge);
    this.studentList.push({
      studentName: this.studentName,
      studentAge: this.studentAge,
    });
    // console.log(this.studentList);

    this.myEvent.emit(this.studentList)

       
  }
  /////Child To Parent////////////

}
