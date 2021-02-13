import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/sevices/cart.service';
import { Product, ProductCart } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/sevices/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartApiRes: ProductCart[];
  public products: Product[] = [];
  private index = 0;
  public searchText: String;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getProduct();
    this.productService.productTitle.subscribe(
      (data: String) => {
        this.searchText = data;
      }
    )
  }

  private getProduct(): void {
    this.cartService.getCartProducts().subscribe(
      requestedData => {
        this.cartApiRes = requestedData;
        let n:number;
        let index = 0;
        for(let i=0;i<this.cartApiRes.length;i++) {
          let n = this.cartApiRes[i].products.length;
          let cartItem = this.cartApiRes[i].products;
          for(let j=0;j<n;j++) {
            this.getSingleProductById(cartItem[j].productId,cartItem[j].quantity);
          }
        }
      }
    )
  }

  private getSingleProductById(id: number,quantity:number): void {
    this.productService.getProductsById(id).subscribe(
      res => {
        this.products[this.index] = res;
        this.products[this.index].quantity = quantity;
        this.index++;
      }
    );
  }

  private onDelete(id: String): void {
    if (confirm('Are you sure want to delete ?')) {
      this.cartService.deleteCart().subscribe(
        res => {
          this.products = this.products.filter(
            (value) => value.id !== id
          );
          this.toastr.warning('product removed from cart!', 'Deleted!')
        }
      )
    }
  }


}
