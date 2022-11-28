import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'



@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  data:any;
  id:any;
  brands:any;
  currentbrand:any;


  _url:any;
  page=true;


  formGroup = new FormGroup({
    name: new FormControl(''),
    upc: new FormControl(''),
    current_cost: new FormControl(''),
    profit_percentage: new FormControl(''),
    status: new FormControl(''),
    brand: new FormControl('')

  })

  constructor(
    private ProductsService:ProductsService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.ActivatedRoute.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this._url = this.router.url

    this.getBrands();

    if(this._url == '/products/add'){
    this.page = false;
    }

    if(this.page == true ){
      this.ProductsService.find(this.id).subscribe((data:any)=>{
        this.data = data;
      })
      }
  }

  getBrands(){
    this.brands = this.ProductsService.brands().subscribe(data=>{
      this.brands = data;
    })
  }

  add(form:any){
    parseInt(form.status);
    this.data = {
      'name':form.name,
      'upc':form.upc,
      'current_cost':form.current_cost,
      'profit_percentage':form.profit_percentage,
      'enable':form.status,
      'brand':form.brand

    };

    this.ProductsService.add(this.data as any).subscribe(data=>{
      this.data = data;
    });
    this.router.navigate(['/products']);
  }


  edit(form:any){
    parseInt(form.status);
    this.data = {
      'name':form.name,
      'upc':form.upc,
      'current_cost':form.current_cost,
      'profit_percentage':form.profit_percentage,
      'enable':form.status,
      'brand':form.brand
    };
    this.ProductsService.update(this.id, this.data).subscribe((res)=>{
    this.router.navigate(['/products']);
    })

  }

}
