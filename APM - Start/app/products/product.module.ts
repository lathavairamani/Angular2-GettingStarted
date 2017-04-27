import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
     SharedModule,
     RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }]
    )],
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    ProductDetailComponent
   ],
  providers: [
    ProductDetailGuard,
    ProductService
  ]
})


export class ProductModule {}

