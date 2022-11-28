import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  products:any;


  constructor(
    private ProductsService:ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.products = this.ProductsService.list().subscribe(products=>{
      this.products = products;
    })
  }

  delete(id:any){
    this.ProductsService.delete(id).subscribe();
    this.router.navigate(['/products']);

  }
}
