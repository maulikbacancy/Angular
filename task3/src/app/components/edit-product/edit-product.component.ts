import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/sevices/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {
  public product = new Product('','','','','','');
  private subscription: Subscription;

  constructor(
    private productService: ProductService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.product = this.productService.editableProduct;
  }

  public onSubmit(form: NgForm): void {
    this.subscription = this.productService.editProduct(this.product).subscribe(res => {
      this.toastr.success('Product Updated', 'Successfull!');
      this.router.navigate(['product']);
      form.resetForm();
    });
    
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}
