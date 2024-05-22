import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  data:any
  id:string=''
  name:string=''
  link:string=''
  resu:string=''
  constructor(private http:HttpClient) { }

  upload(){
    this.data={id:this.id,name:this.name,link:this.link}
    this.http.post('http://localhost:5000/upload',this.data).subscribe((res)=>{
      this.resu='Uploaded Successfully!!!'
    })
  }

  ngOnInit(): void {
  }

}
