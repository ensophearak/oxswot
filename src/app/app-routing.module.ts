import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

import { StoreComponent } from './store/store.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { CreateStoreComponent } from './store/create-store/create-store.component';

const page: Routes = [
    {
        path: '', children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '', component: HomeComponent },
            { path: 'createcompany', component: CreatecompanyComponent},
            { path: 'store', component: StoreComponent},
            { path: 'store/create', component: CreateStoreComponent},
            { path: '', component: HeaderComponent, outlet: 'header' },
            { path: '', component: FooterComponent, outlet: 'footer' },
            { path: '', component: SidebarComponent, outlet: 'sidebar' },
        ]
    },
    {
        path: 'login', children: [
            { path: '', component: LoginComponent, },
            // { path: '', component: HeaderComponent, outlet: 'header' },
        ]

    }
]



@NgModule({


    imports: [
        RouterModule.forRoot(page),
    ],


    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }