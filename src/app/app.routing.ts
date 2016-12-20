import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by sajmera on 12/20/16.
 */


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path: 'contact', component:ContactComponent}

];


export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
