import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
// allcontacts- to get the contact data from api
allcontact(){
  return this.http.get('https://dummyjson.com/users')
}

}

