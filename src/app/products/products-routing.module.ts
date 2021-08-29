import { AddComponent } from './add/add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';

const routes: Routes = [
  {path :'' , component : ProductListComponent},
  {path :'products/:id', component : ProductDetailsComponent},
  {path :'add', component : AddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
