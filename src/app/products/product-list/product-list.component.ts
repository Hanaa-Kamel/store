import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productsList : any



  constructor(private _ProductsService:ProductsService) {

  }

  ngOnInit(): void {
    this._ProductsService.getProductsList().subscribe((data)=>{
      this.productsList = data
      console.log(this.productsList)
    })



  }


  creatproduct(){

  }

}
