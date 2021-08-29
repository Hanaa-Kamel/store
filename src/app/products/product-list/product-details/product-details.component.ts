import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: any
  productDetails:any

  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService) {
   }

    ngOnInit():void{
      this.id =  this._ActivatedRoute.snapshot.params.id;

      this._ProductsService.getproductDetails(this.id).subscribe((response)=>{

       this.productDetails = response;
       console.log(this.productDetails)
       console.log(this.id)
      })
    }

   }
