import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandFormComponent } from './Brand/brand-form/brand-form.component';
import { BrandListComponent } from './Brand/brand-list/brand-list.component';

import { HomeComponent } from './home/home.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [

 {
  path: '',
  component: HomeComponent,
},
{
  path: 'brand',
  component: BrandListComponent,
},
{
  path: 'brand/add',
  component: BrandFormComponent,
},
{
  path: 'brand/edit/:id',
  component: BrandFormComponent,
},
{
  path: 'products',
  component: ProductsListComponent,
},
{
  path: 'products/add',
  component: ProductsFormComponent,
},
{
  path: 'products/edit/:id',
  component: ProductsFormComponent,
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
