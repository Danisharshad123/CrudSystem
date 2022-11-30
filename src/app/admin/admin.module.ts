import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductCreatComponent } from './product-creat/product-creat.component';
import { ProductNavComponent } from './product-nav/product-nav.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    ProductComponent,
    ProductCreatComponent,
    ProductNavComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
