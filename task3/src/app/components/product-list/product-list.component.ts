import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/sevices/cart.service';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/sevices/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];
  public page:number = 1;
  public searchText: String;


  constructor(
      private productService: ProductService, 
      private router: Router,
      private toastr: ToastrService,
      private cartService: CartService) { }

  ngOnInit(): void {
    this.getProduct();
    this.productService.productTitle.subscribe(title => {
      this.page = 1;
      this.searchText = title;
    });
  }

  private getProduct(): void {
    this.productService.getProducts().subscribe(
      requestedData => {
        this.products = requestedData;
      }
    )
  }

  public onDeleteProduct(id: string): void {
    if (confirm('Are you sure want to delete ?')) {
      this.productService.deleteProduct(id).subscribe(res => {
        this.products = this.products.filter(
          (value) => value.id !== id
        );
        this.toastr.warning('Product was deleted!','Deleted');
      });
    }
  }

  public onEditProduct(product: Product): void {
    this.productService.editableProduct = product;
    this.router.navigate(['/product/'+product.id])
  }

  public onAddToCart(id: String): void {
    this.cartService.addToCart(id).subscribe(res => {
      this.toastr.success('Product added successfully!','Successfull');
    })
  }

  
}
