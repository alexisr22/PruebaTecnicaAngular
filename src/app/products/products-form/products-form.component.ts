import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  data:any;
  id:any;

  _url:any;
  page=true;

  constructor(
    private ProductsService:ProductsService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.ActivatedRoute.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this._url = this.router.url

    if(this._url == '/products/add'){
    this.page = false;
    }

    if(this.page == true ){
      this.ProductsService.find(this.id).subscribe((data:any)=>{
        this.data = data;
        console.log(this.data);
      })
      }
  }

  add(name:string, upc:string, current_cost:any, profit_percentage:any, status:any, brand:string){
    parseInt(status);
    this.data = {
      'name':name,
      'upc':upc,
      'current_cost':current_cost,
      'profit_percentage':profit_percentage,
      'enable':status,
      'brand':brand

    };
    this.ProductsService.add(this.data as any).subscribe(data=>{
      this.data = data;
    });
    this.router.navigate(['/products']);
  }


  edit(name:string, upc:string, current_cost:any, profit_percentage:any, status:any, brand:string){
    parseInt(status);
    this.data = {
      'name':name,
      'upc':upc,
      'current_cost':current_cost,
      'profit_percentage':profit_percentage,
      'enable':status,
      'brand':brand
    };
    console.log(this.data);
    this.ProductsService.update(this.id, this.data).subscribe((res)=>{
    this.router.navigate(['/products']);
    })

  }

}
