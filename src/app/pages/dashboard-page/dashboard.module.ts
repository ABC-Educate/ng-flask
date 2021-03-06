import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {ProfileUserPageComponent} from './profile-user-page/profile-user-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {ComponentModule} from '../../components/component.module';
import {MaterialModule} from '../../material.module';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';


const components = [
    ProfileUserPageComponent, HomePageComponent
];

const modules = [
    DashboardRoutingModule,
    MaterialModule,
    ComponentModule
];

@NgModule({
    declarations: [ProfileUserPageComponent, HomePageComponent, ProductPageComponent, AddProductPageComponent, EditProductPageComponent],
    imports: [
        CommonModule,
        ...modules,
        ReactiveFormsModule
    ],
    exports: [
        ...components,
    ]
})
export class DashboardModule {
}
