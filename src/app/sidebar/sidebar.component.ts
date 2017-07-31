import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [AppService]

})
export class SidebarComponent implements OnInit {
  options: Array<any>;
  IsChecked;



  constructor(private appservice: AppService) {
    this.options = appservice.getOptions();
    console.log(this.options);
  }
  @Output() clicked = new EventEmitter<any>();
  ngOnInit() { }

  clearAll() {

    for( var head in this.options){
      // console.log(this.options[head].content)
      for(var name in this.options[head].content){
        var data=this.options[head].head+this.options[head].content[name];
        // console.log(data);
        if ((<HTMLInputElement>document.getElementById(data)).checked === true) {
          (<HTMLInputElement>document.getElementById(data)).checked = false;

        }
      }
    }

    let specifications = {
  clear: true

    };
    this.clicked.emit(specifications);
  }
  selected(head, name) {

    if ((<HTMLInputElement>document.getElementById(head+name)).checked === true) {

      this.IsChecked = true;
    }
    if ((<HTMLInputElement>document.getElementById(head+name)).checked === false) {
      //console.log("unchecked");
      this.IsChecked = false;
    }

    let specifications = {
      head: head,
      content: name,
      checked: this.IsChecked,
      clear: false
    };
    this.clicked.emit(specifications);
  }
}
