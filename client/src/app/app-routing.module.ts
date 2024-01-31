import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent, data: {breadcrumb: 'Home'}},
  {path:'test-error', component: TestErrorComponent},
  {path:'not-found', component: NotfoundComponent},
  {path:'server-error', component: ServerErrorComponent},
  {path:'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  {path:'basket', loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule) },
  {
    path: 'checkout',
    canActivate: [authGuard],
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {path:'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  {path:'**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
