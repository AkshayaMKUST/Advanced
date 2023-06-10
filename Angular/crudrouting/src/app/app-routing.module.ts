import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'create-product',component:CreateComponent},
  {path:'update-product/:productId',component:UpdateComponent},
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path:'delete-product/:id',component:DeleteComponent},
  {path:'get-product',component:HomeComponent},
  {path:'product-details/:productId',component:ProductdetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
