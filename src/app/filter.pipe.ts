import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // Storage=new Array()
  // camera=new Array();
  // OS=new Array();
  newdata:any[];




  transform(data: any, dont?: any): any {


if(dont==undefined){
  return data;
}
return dont;
// this.data=this.data.filter(res=>res.name.startsWith(value.content));
//



}
}
