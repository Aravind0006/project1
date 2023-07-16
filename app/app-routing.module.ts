import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdComponent } from './ad/ad.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'Navbar',component:NavbarComponent},
  {path:'',component:HomeComponent},
  {path:'ad',component:AdComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
