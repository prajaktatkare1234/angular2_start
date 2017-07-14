import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [AppService]

})
export class SidebarComponent implements OnInit {
options:Array<any>;


manufacturer=new Array();
Storage=new Array();
camera=new Array();
OS=new Array();

  constructor(private appservice:AppService) {
    this.options=appservice.getOptions();
    console.log( this.options);
  }
  @Output() clicked=new EventEmitter<any>();

  ngOnInit() {}

  selected(data1,data2)
  {




      let specifications = {
        head :data1,
        content:data2,
        // camera:this.camera,
        //  OS:this.OS
        //
       };

    this.clicked.emit(specifications);
  }

// console.log("dsfkdslkf");
}






// }
// }
