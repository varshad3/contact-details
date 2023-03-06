import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  allContact:any
  searchKey:string=''

  constructor(private api:DataService){

  }
  
  ngOnInit(): void {
    // to get the all contact
    this.getAllContact()
  }
    // api call to get all contact
    getAllContact(){
    this.api.allcontact()
    .subscribe((result:any)=>{
      console.log(result);
      this.allContact =result.users
    })
  }
}

