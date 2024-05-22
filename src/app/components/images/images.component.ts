import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  data:any
  constructor(private http:HttpClient) { }
  getall(){
    this.http.get('http://localhost:5000/get').subscribe((res)=>{
    this.data=res
    console.log(this.data)
  })
}


  ngOnInit(): void {
    this.getall()
  }
 
}
