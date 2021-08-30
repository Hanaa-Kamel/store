import { ProductsService } from './../../products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addProductForm : FormGroup = new FormGroup({})

  constructor( private _FormBuilder:FormBuilder , private _Products:ProductsService) { }

  ngOnInit(): void {
    this.addProductForm = this._FormBuilder.group({
      'title' : new FormControl(''),
      'price' : new FormControl(''),
      'category' : new FormControl(''),

    })
  }


  createProduct(){
    this._Products.addProduct(this.addProductForm.value).subscribe(data=>{
      alert('product added')
    }, err =>{
      alert(err)
    })
    // console.log(this.addProductForm.value)
  }

}
