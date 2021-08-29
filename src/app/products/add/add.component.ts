import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _HttpClient:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this._HttpClient.post('https://fakestoreapi.com/products',data).subscribe((res)=>{
    console.log(res)
    })
  }

}
