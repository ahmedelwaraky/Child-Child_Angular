import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChildToChild';

  dataFromChild:any=''
  execute(x:any){
    // console.log(x);
    this.dataFromChild =x
    }
    
}
