import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {}
  ngOnInit(): void {
    this.sub = this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getProduct(id);
    });
  }
  onBack(): void {
    this._router.navigate(['/products']);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(product => this.product = product, error => this.errorMessage = <any>error);
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product Detail: ' + message;
  }
}
