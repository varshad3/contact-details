import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class filterPipe implements PipeTransform {
  fullname:string=''
  transform(allContact: any[], searchKey:string,propertyName:string):any [] {
// array after transform
const result:any = []
if(!allContact || searchKey == '' || propertyName == ''){
  return allContact
}
allContact.forEach((contact:any)=>{
  let text1=contact.firstName;
  let text2=contact.lastName;
  this.fullname=text1.concat(text2)
  if(this.fullname.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
    result.push(contact)
  }
})
 return result 
  }

}
