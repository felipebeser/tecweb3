import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
{
    path: 'header' , component: HeaderComponent
},
{
    path: 'contact' , component: ContactUsComponent
},
{
  path: 'services' , component: ServicesPageComponent
},
{
  path: 'about' , component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
