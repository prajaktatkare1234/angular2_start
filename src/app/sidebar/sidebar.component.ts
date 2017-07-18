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
IsChecked;
// count=0;
// startHead=null;
// secondHead=null;
// thirdHead=null;
// fourthHead=null;
// vcount=0;
//



  constructor(private appservice:AppService) {
    this.options=appservice.getOptions();
    console.log( this.options);
  }
  @Output() clicked=new EventEmitter<any>();

  ngOnInit() {}

  selected(data1,data2)
  {
    //
    // this.count++;
    // if(this.count==1){
    //  this.startHead=data1;
    //  this.vcount=1;
    // }

    // if(data1!=this.startHead && data1!=this.secondHead && this.secondHead!==null && this.startHead!==null){
    // if(this.vcount==2 && data1!==this.secondHead){
    //   console.log("thirdHead")
    //   this.thirdHead=data1;
    //   this.vcount=3;
    // }
    // if(this.vcount==3 && data1!==this.thirdHead){
    //   console.log("fourthHead")
    //   this.fourthHead=data1;
    // }
    // // if(data1!=this.startHead && this.startHead!==null){
    // if(this.vcount==1 && data1!==this.startHead){
    //   console.log("secondHead")
    //   this.secondHead=data1;
    //   this.vcount=2;
    // }

    if ((<HTMLInputElement>document.getElementById(data2)).checked === true) {
          console.log("checked");
          this.IsChecked=true;
        }
    if ((<HTMLInputElement>document.getElementById(data2)).checked === false) {
              console.log("unchecked");
              this.IsChecked=false;
        }

      let specifications = {
        head :data1,
        content:data2,
        checked:this.IsChecked,
        // startHead:this.startHead,
        // secondHead:this.secondHead,
        // thirdHead:this.thirdHead,
        // fourthHead:this.fourthHead
        // camera:this.camera,
        //  OS:this.OS
        //
       };

    this.clicked.emit(specifications);
  }


}






// }
// }
